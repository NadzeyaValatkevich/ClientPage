import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { objectsApi } from '../api'
import { ResponseBookingData, TransformedFormValues } from '../types/@types'

export const submitBooking = createAsyncThunk<
  ResponseBookingData,
  TransformedFormValues
>('booking/submitBooking', async (bookingParams, thunkAPI) => {
  try {
    const response = await objectsApi.createBooking(bookingParams)

    if (response.status === 201) {
      return response.data
    } else {
      return thunkAPI.rejectWithValue({ errors: response.data.message })
    }
  } catch (err: any) {
    const error: AxiosError = err
    return thunkAPI.rejectWithValue({ errors: [error.message] })
  }
})
