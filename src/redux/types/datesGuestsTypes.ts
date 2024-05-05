export type ChildAge = {
  value: number
  label: string
}

export type GuestsType = {
  adults: number | null
  children: number | null
  childAges: Array<ChildAge | undefined>
}

export type DatesType = {
  check_in_date: string | undefined
  check_out_date: string | undefined
}

export type DatesGuestsObjectType = {
  check_in_date: Date | string
  check_out_date: Date | string
  guests: GuestsType
}

export type DatesGuestsObjectRequestType = {
  check_in_date: Date | string | null
  check_out_date: Date | string | null
  people_amount: number | string | null
  main_object: number | string | null
}
