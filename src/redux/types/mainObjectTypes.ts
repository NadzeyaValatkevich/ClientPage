type AddressType = {
  region: string
  locality: string
  address: string
}

type CountryItemType = {
  countryCode: string
  countryLabel: string
}

export type MainObjectType = {
  id: string | null
  name: string
  booking_photo: string
  full_address: AddressType | null
  country: string | null
  countriesList: CountryItemType[]
}
