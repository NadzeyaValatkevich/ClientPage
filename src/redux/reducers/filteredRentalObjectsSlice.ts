import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchFilteredRentalObjects } from '../thunks/filteredRentalObjectThunk'
import { RentalObjectsResponseData } from '../types/rentalObjectTypes'
import { RequestStatusType } from '../../common/enums/enums'

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

const filteredRentalObjectsSlice = createSlice({
  name: 'filteredRentalObjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredRentalObjects.pending, (state) => {
        state.status = RequestStatusType.loading
      })
      .addCase(
        fetchFilteredRentalObjects.fulfilled,
        (state, action: PayloadAction<RentalObjectsResponseData>) => {
          state.data = action.payload
          state.status = RequestStatusType.succeeded
        },
      )
      .addCase(fetchFilteredRentalObjects.rejected, (state, action) => {
        state.status = RequestStatusType.failed
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export default filteredRentalObjectsSlice.reducer
