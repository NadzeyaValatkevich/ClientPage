import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RequestStatusType } from '../../common/enums/enums'
import { appActions } from '../commonActions/appActions'

type InitialStateType = {
  status: RequestStatusType
  error: null | string
}

const initialState: InitialStateType = {
  status: RequestStatusType.idle as RequestStatusType,
  error: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        appActions.setStatus,
        (state, action: PayloadAction<{ status: RequestStatusType }>) => {
          state.status = action.payload.status
        },
      )
      .addCase(
        appActions.setError,
        (state, action: PayloadAction<{ error: string | null }>) => {
          state.error = action.payload.error
        },
      )
  },
})

export default appSlice.reducer
