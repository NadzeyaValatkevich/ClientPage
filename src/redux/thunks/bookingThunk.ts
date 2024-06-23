import { createAsyncThunk } from '@reduxjs/toolkit'
import { objectsApi } from '../api'
import { ResponseBookingData, TransformedFormValues } from '../types/@types'
import { appActions } from '../commonActions/appActions'
import { RequestStatusType } from '../../common/enums/enums'
import { handleAsyncServerNetworkError } from '../../utils/error-utils'

export const submitBooking = createAsyncThunk<
  ResponseBookingData,
  TransformedFormValues
>('booking/submitBooking', async (bookingParams, thunkAPI) => {
  thunkAPI.dispatch(appActions.setStatus({ status: RequestStatusType.loading }))
  try {
    const response = await objectsApi.createBooking(bookingParams)

    if (response.status === 201) {
      thunkAPI.dispatch(
        appActions.setStatus({ status: RequestStatusType.succeeded }),
      )
      return response.data
    } else {
      return thunkAPI.rejectWithValue('Не удалось создать бронь')
    }
  } catch (error: any) {
    return handleAsyncServerNetworkError(error, thunkAPI)
    // const error: AxiosError = err
    // return thunkAPI.rejectWithValue({ errors: [error.message] })
  }
})
