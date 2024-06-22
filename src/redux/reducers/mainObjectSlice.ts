import { createSelector, createSlice } from '@reduxjs/toolkit'
import { fetchMainObject } from '../thunks/mainObjectThunk'
import { MainObjectType } from '../types/mainObjectTypes'
import { RootState } from '../store'
import { RequestStatusType } from '../../common/enums/enums'
import { PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  data: MainObjectType
  status: RequestStatusType
  error: null | string
}

const mainObject: MainObjectType = {
  id: null,
  name: '',
  booking_photo: '',
  full_address: null,
  country: null,
  countriesList: [
    { countryCode: 'by', countryLabel: 'Республика Беларусь' },
    { countryCode: 'ru', countryLabel: 'Российская Федерация' },
    { countryCode: 'ua', countryLabel: 'Украина' },
    { countryCode: 'kz', countryLabel: 'Республика Казахстан' },
    { countryCode: 'am', countryLabel: 'Республика Армения' },
    { countryCode: 'az', countryLabel: 'Азербайджанская Республика' },
    { countryCode: 'ge', countryLabel: 'Грузия' },
    { countryCode: 'kg', countryLabel: 'Кыргызская Республика' },
    { countryCode: 'md', countryLabel: 'Республика Молдова' },
    { countryCode: 'tj', countryLabel: 'Республика Таджикистан' },
    { countryCode: 'uz', countryLabel: 'Республика Узбекистан' },
    { countryCode: 'ee', countryLabel: 'Эстонская Республика' },
    { countryCode: 'lv', countryLabel: 'Латвийская Республика' },
    { countryCode: 'lt', countryLabel: 'Литовская Республика' },
    { countryCode: 'pl', countryLabel: 'Республика Польша' },
  ],
}

const initialState: initialStateType = {
  data: mainObject,
  status: RequestStatusType.idle as RequestStatusType,
  error: null,
}

const mainObjectSlice = createSlice({
  name: 'mainObject',
  initialState,
  reducers: {
    setStatus: (
      state,
      action: PayloadAction<{ status: RequestStatusType }>,
    ) => {
      state.status = action.payload.status
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainObject.pending, (state) => {
        state.status = RequestStatusType.loading
        state.error = null
      })
      .addCase(
        fetchMainObject.fulfilled,
        (state, action: PayloadAction<MainObjectType>) => {
          state.status = RequestStatusType.succeeded
          state.data = {
            ...action.payload,
            countriesList: state.data.countriesList,
          }
          // return action.payload
          // return {
          //   ...state,
          //   ...action.payload,
          //   countriesList: state.countriesList,
          // }
        },
      )
      .addCase(fetchMainObject.rejected, (state, action) => {
        state.status = RequestStatusType.failed
        state.error = action.payload as string
      })
  },
})

export const { setStatus } = mainObjectSlice.actions

const getCountriesList = (state: RootState) =>
  state.mainObject.data.countriesList

export const getSortedCountriesList = createSelector(
  [getCountriesList],
  (list) => {
    const listCopy = [...list]
    return listCopy.sort((a, b) => a.countryLabel.localeCompare(b.countryLabel))
  },
)

export const getCountriesOptions = createSelector(
  [getCountriesList],
  (list) => {
    return list.map((country) => ({
      value: country.countryCode,
      label: country.countryLabel,
    }))
  },
)

export default mainObjectSlice.reducer
