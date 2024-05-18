import { ReservationItem } from '../../redux/types/rentalObjectTypes'

export const defineReservationsDates = (
  reservationsDates: ReservationItem[],
) => {
  const highlightedDates: Date[] = []

  reservationsDates.forEach((reservation) => {
    const { check_in_date, check_out_date } = reservation

    const currentDate = new Date(check_in_date)
    const endDate = new Date(check_out_date)

    while (currentDate < endDate) {
      highlightedDates.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
  })

  return highlightedDates
}

export const createYearAheadDates = () => {
  const dates = []
  const currentDate = new Date()
  const endDate = new Date(
    new Date().setFullYear(currentDate.getFullYear() + 1),
  )

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}
