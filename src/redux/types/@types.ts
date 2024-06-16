import { GuestsType } from './datesGuestsTypes'

export type ResponseData<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T
}

export type TelephoneType = {
  country_code: string
  phone_code: string
  phone_number: string
}

export type FormValues = {
  rental_object: number
  check_in_date: string | Date | null
  check_out_date: string | Date | null
  check_in_time: string
  check_out_time: string
  guests: GuestsType
  has_animals: boolean
  animals_info?: string | null
  first_name: string
  second_name: string
  last_name: string
  birth_day?: string | null
  sex: 'mal' | 'fem'
  nationality: string
  email: string
  telegram: string
  phone: TelephoneType
  comment: string
}

export type FormValuesDefault = Omit<
  FormValues,
  'first_name' | 'last_name' | 'price' | 'check_out_time' | 'email' | 'phone'
>

type OmittedFormValues = Omit<FormValues, 'check_out_time' | 'guests'>

export type TransformedFormValues = OmittedFormValues & {
  adult: number
  children: Array<number | undefined>
}

export type ResponseBookingData = Omit<FormValues, 'guests'> & {
  id: number
  adult: number
  children: Array<number | undefined>
  total: string
  paid: string
  status: string
  created_at: string
}
