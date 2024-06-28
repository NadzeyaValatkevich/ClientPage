import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchRentalObjects } from '../thunks/rentalObjectsThunk'
import { RentalObjectsResponseData } from '../types/rentalObjectTypes'
import { RequestStatusType } from '../../common/enums/enums'
import { features } from './../../components/HouseCard/HouseCard'

type initialStateType = {
  data: RentalObjectsResponseData
  status: RequestStatusType
  error: null | string
}

const initialState: initialStateType = {
  data: {} as RentalObjectsResponseData,
  status: RequestStatusType.idle as RequestStatusType,
  error: null,
}

const rentalObjectsSlice = createSlice({
  name: 'rentalObjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentalObjects.pending, (state) => {
        state.status = RequestStatusType.loading
        state.error = null
      })
      .addCase(
        fetchRentalObjects.fulfilled,
        (state, action: PayloadAction<RentalObjectsResponseData>) => {
          state.data = action.payload
          state.status = RequestStatusType.succeeded
        },
      )
      .addCase(fetchRentalObjects.rejected, (state, action) => {
        state.status = RequestStatusType.failed
        state.error = action.payload as string
      })
  },
})

export default rentalObjectsSlice.reducer
