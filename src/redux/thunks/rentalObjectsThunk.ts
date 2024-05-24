import { createAsyncThunk } from '@reduxjs/toolkit'
import { objectsApi } from '../api'
import { AxiosError } from 'axios'
import { RentalObjectsResponseData } from '../types/rentalObjectTypes'

export const fetchRentalObjects = createAsyncThunk<
  RentalObjectsResponseData,
  number
>('rentalObjects/fetchRentalObjects', async (id, thunkAPI) => {
  try {
    const response = await objectsApi.getRentalObjects(id)
    if (response.status === 200) {
      return response.data
    } else {
      return thunkAPI.rejectWithValue({ errors: response.data.message })
    }
  } catch (err: any) {
    const error: AxiosError = err
    return thunkAPI.rejectWithValue({ errors: [error.message] })
  }
})
