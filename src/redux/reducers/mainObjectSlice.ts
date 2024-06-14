import {
  PayloadAction,
  Slice,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { fetchMainObject } from '../thunks/mainObjectThunk'
import { MainObjectType } from '../types/mainObjectTypes'
import { RootState } from '../store'

const initialState: MainObjectType = {
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
const mainObjectSlice: Slice<MainObjectType> = createSlice({
  name: 'mainObject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchMainObject.fulfilled,
      (state, action: PayloadAction<MainObjectType>) => {
        // return action.payload
        return {
          ...state,
          ...action.payload,
          countriesList: state.countriesList,
        }
      },
    )
  },
})

const getCountriesList = (state: RootState) => state.mainObject.countriesList

export const getSortedCountriesList = createSelector(
  [getCountriesList],
  (list) => {
    const listCopy = [...list]
    return listCopy.sort((a, b: any) =>
      a.countryLabel.localeCompare(b.countryLabel),
    )
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
