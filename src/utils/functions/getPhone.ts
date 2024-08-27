import { PhoneType } from '../../redux/types/mainObjectTypes'

export const getPhone = (phone: PhoneType) => {
  return `${phone.phone_code} (${phone.phone_number.slice(0, 2)}) ${phone.phone_number.slice(2, 5)}-${phone.phone_number.slice(5, 7)}-${phone.phone_number.slice(7)}`
}
