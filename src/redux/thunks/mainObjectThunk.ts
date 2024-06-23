import { createAsyncThunk } from '@reduxjs/toolkit'
import { objectsApi } from '../api'
import { MainObjectType } from '../types/mainObjectTypes'
import { handleAsyncServerNetworkError } from '../../utils/error-utils'
import { fetchRentalObjects } from './rentalObjectsThunk'

export const fetchMainObject = createAsyncThunk<MainObjectType, number>(
  'mainObject/fetchMainObject',
  async (id, thunkAPI) => {
    try {
      const response = await objectsApi.getMainObject(id)

      thunkAPI.dispatch(fetchRentalObjects(Number(id)))

      return response.data
    } catch (error: any) {
      const errorMessage = handleAsyncServerNetworkError(error, thunkAPI, false)
      return thunkAPI.rejectWithValue(errorMessage)
    }
  },
)
