import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DatesGuestsObjectType } from '../types/datesGuestsTypes'
import { RequestStatusType } from '../../common/enums/enums'

type initialStateType = {
  data: DatesGuestsObjectType
  status: RequestStatusType
}

const initialState: initialStateType = {
  data: {} as DatesGuestsObjectType,
  status: RequestStatusType.idle as RequestStatusType,
}
const datesGuestsSlice = createSlice({
  name: 'datesGuestsObject',
  initialState,
  reducers: {
    setDatesGuestsObject(state, action: PayloadAction<DatesGuestsObjectType>) {
      state.data = action.payload
    },
    setStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status
    },
  },
})

export const { setDatesGuestsObject } = datesGuestsSlice.actions

export default datesGuestsSlice.reducer
