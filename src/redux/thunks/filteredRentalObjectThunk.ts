import { createAsyncThunk } from '@reduxjs/toolkit'
import { objectsApi } from '../api'
import { DatesGuestsObjectRequestType } from '../types/datesGuestsTypes'
import { RentalObjectsResponseData } from '../types/rentalObjectTypes'
import { handleAsyncServerNetworkError } from '../../utils/error-utils'

export const fetchFilteredRentalObjects = createAsyncThunk<
  RentalObjectsResponseData,
  DatesGuestsObjectRequestType
>(
  'filteredRentalObjects/fetchFilteredRentalObjects',
  async (data, thunkAPI) => {
    try {
      const response = await objectsApi.getFilteredRentalObjects(data)

      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      const errorMessage = handleAsyncServerNetworkError(error, thunkAPI, false)
      return thunkAPI.rejectWithValue(errorMessage)
    }
  },
)
