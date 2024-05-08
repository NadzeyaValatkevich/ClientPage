import { OptionItemType } from '../../redux/types/datesGuestsTypes'

type OptionsCheckInTimePropsType = OptionItemType[]

export const generateTimeOptions = (time: string) => {
  const [startHour] = time.split(':').map(Number)
  const options: OptionsCheckInTimePropsType = []

  for (let hour = startHour; hour <= 23; hour++) {
    options.push({ value: `${hour}`, label: `${hour}:00` })
  }

  options.push({ value: '23:59', label: '23:59' })

  return options
}

export const formatTime = (time: string) => {
  const [startHour, startMinute] = time.split(':')

  return `${startHour}:${startMinute}`
}
