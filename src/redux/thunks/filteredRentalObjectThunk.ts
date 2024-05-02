import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { objectsApi } from '../api'
import { DatesGuestsObjectRequestType } from '../types/datesGuestsTypes'
import { RentalObjectsResponseData } from '../types/rentalObjectTypes'

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
      } else {
        return thunkAPI.rejectWithValue({ errors: response.data.message })
      }
    } catch (err: any) {
      const error: AxiosError = err
      return thunkAPI.rejectWithValue({ errors: [error.message] })
    }
  },
)
