import { createAsyncThunk } from '@reduxjs/toolkit'
import { objectsApi } from '../api'
import { RentalObjectsResponseData } from '../types/rentalObjectTypes'
import { handleAsyncServerNetworkError } from '../../utils/error-utils'

export const fetchRentalObjects = createAsyncThunk<
  RentalObjectsResponseData,
  string
>('rentalObjects/fetchRentalObjects', async (id, thunkAPI) => {
  try {
    const response = await objectsApi.getRentalObjects(id)
    if (response.status === 200) {
      return response.data
    }
  } catch (error: any) {
    console.log(error)
    const errorMessage = handleAsyncServerNetworkError(error, thunkAPI, false)
    console.log(errorMessage)
    return thunkAPI.rejectWithValue(errorMessage)
  }
})
