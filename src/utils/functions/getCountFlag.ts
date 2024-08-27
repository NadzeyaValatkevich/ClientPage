import {
  Belarus,
  Armenia,
  Azerbaijan,
  Estonia,
  Georgia,
  Kazakhstan,
  Kyrgyzstan,
  Latvia,
  Lithuania,
  Moldova,
  Poland,
  Russia,
  Tajikistan,
  Ukraine,
  Uzbekistan,
  Other,
} from '../../assets/flag_icons'

export const getCountryFlag = (code: string) => {
  switch (code) {
    case 'by':
      return Belarus
    case 'ru':
      return Russia
    case 'ua':
      return Ukraine
    case 'kz':
      return Kazakhstan
    case 'am':
      return Armenia
    case 'az':
      return Azerbaijan
    case 'ge':
      return Georgia
    case 'kg':
      return Kyrgyzstan
    case 'md':
      return Moldova
    case 'tj':
      return Tajikistan
    case 'uz':
      return Uzbekistan
    case 'ee':
      return Estonia
    case 'lv':
      return Latvia
    case 'lt':
      return Lithuania
    case 'pl':
      return Poland
    default:
      return Other
  }
}
