export const getCountCountry = (code: string) => {
  console.log(code === 'by')
  switch (code) {
    case 'by':
      return 'Республика Беларусь'
    case 'ru':
      return 'Российская Федерация'
    case 'ua':
      return 'Украина'
    case 'kz':
      return 'Республика Казахстан'
    case 'am':
      return 'Республика Армения'
    case 'az':
      return 'Азербайджанская Республика'
    case 'ge':
      return 'Грузия'
    case 'kg':
      return 'Кыргызская Республика'
    case 'md':
      return 'Республика Молдова'
    case 'tj':
      return 'Республика Таджикистан'
    case 'uz':
      return 'Республика Узбекистан'
    case 'ee':
      return 'Эстонская Республика'
    case 'lv':
      return 'Латвийская Республика'
    case 'lt':
      return 'Литовская Республика'
    case 'pl':
      return 'Республика Польша'
    default:
      return 'Страна'
  }
}
