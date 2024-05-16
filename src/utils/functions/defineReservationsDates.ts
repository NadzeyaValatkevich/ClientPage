import { ReservationItem } from '../../redux/types/rentalObjectTypes'

// export const defineReservationsDates = (reservationsDates: ReservationItem[]) => {
//  const disabledDates = reservationsDates.reduce((highlightedDates: any,  reservationsDate: ReservationItem)  => {
//         const {check_in, check_out} = reservationsDate;
//         const dateRange = [];

//         const currentDate = new Date(check_in);

//         while(currentDate <= new Date(check_out)) {
//            const dateToAdd = new Date(currentDate);
//             dateRange.push(dateToAdd);

//             currentDate.setDate(currentDate.getDate() + 1);
//         }

//         dateRange.forEach((date) => {
//             const formattedDate = date.toISOString().slice(0, 10);
//       highlightedDates[formattedDate] = { backgroundColor: "black", color: "white" };
//     });
//     return highlightedDates;
//     }, {})

//     return disabledDates;

// }

// interface HighlightDates {
//     [data: string]: Date[];
// }

// export const defineReservationsDates = (reservationsDates: ReservationItem[]) => {
//     const highlightedDates: HighlightDates = {};

//     reservationsDates.forEach((reservation) => {
//         const { check_in, check_out } = reservation;

//         const currentDate = new Date(check_in);
//         const endDate = new Date(check_out);

//         while (currentDate <= endDate) {
//             const dateString = currentDate.toISOString().split('T')[0]; // Получаем строку формата YYYY-MM-DD
//             if (!highlightedDates[dateString]) {
//                 highlightedDates[dateString] = [new Date(currentDate)]; // Создаем массив с одной датой
//             } else {
//                 highlightedDates[dateString].push(new Date(currentDate)); // Добавляем дату в массив
//             }

//             currentDate.setDate(currentDate.getDate() + 1);
//         }
//     });

//     return highlightedDates;
// }

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
