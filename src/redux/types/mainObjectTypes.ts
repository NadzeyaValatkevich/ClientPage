import { SocialNetworkType } from '../../common/enums/enums'

type AddressType = {
  region: string
  locality: string
  address: string
}

type CountryItemType = {
  countryCode: string
  countryLabel: string
}

export type PhoneType = {
  country_code: string
  phone_code: string
  phone_number: string
}

export type SocialNetworkItemType = {
  social_network_type: SocialNetworkType
  account: string
}

type ContactsType = {
  phone: PhoneType
  email: string
  social_networks: SocialNetworkItemType[]
}

export type MainObjectType = {
  id: string | null
  name: string
  booking_photo: string
  full_address: AddressType | null
  country: string | null
  countriesList: CountryItemType[]
  contacts: ContactsType | null
  phone: PhoneType | null
}
