import {
  EMAIL_ERROR,
  EMAIL_REG,
  FIRST_NAME_ERROR,
  FIRST_NAME_REG,
  LAST_NAME_ERROR,
  REQUIRED_FIELD_ERROR,
  SECOND_NAME_ERROR,
  SECOND_NAME_REG,
  TELEGRAM_ERROR,
  TELEGRAM_REG,
} from '../constants'

export const validateField = (fieldName: string, value: string) => {
  let error = ''
  if (
    !value.trim() &&
    fieldName !== 'second_name' &&
    fieldName !== 'telegram'
  ) {
    error = REQUIRED_FIELD_ERROR
  } else if ((fieldName === 'second_name' || 'telegram') && !value.trim()) {
    error = ''
  } else {
    let regex
    switch (fieldName) {
      case 'last_name':
        regex = FIRST_NAME_REG
        error = !regex.test(value) ? LAST_NAME_ERROR : ''
        break
      case 'first_name':
        regex = FIRST_NAME_REG
        error = !regex.test(value) ? FIRST_NAME_ERROR : ''
        break
      case 'second_name':
        regex = SECOND_NAME_REG
        error = !regex.test(value) ? SECOND_NAME_ERROR : ''
        break
      case 'email':
        regex = EMAIL_REG
        error = !regex.test(value) ? EMAIL_ERROR : ''
        break
      case 'telegram':
        regex = TELEGRAM_REG
        error = !regex.test(value) ? TELEGRAM_ERROR : ''
        break
      default:
        regex = null
        break
    }
  }
  return error
}
