import axios from 'axios'
import { API_HOST } from '../../utils/config'
import { DatesGuestsObjectRequestType } from '../types/datesGuestsTypes'
import { ResponseBookingData, TransformedFormValues } from '../types/@types'

const instance = axios.create({
  baseURL: `${API_HOST}/api`,
})

export const objectsApi = {
  getMainObject(id: string) {
    return instance.get(`/client_part/main_objects/${id}/`)
  },

  getRentalObjects(id: string) {
    return instance.get(`/client_part/rental_objects/?main_object=${id}`)
  },

  getFilteredRentalObjects(data: DatesGuestsObjectRequestType) {
    return instance.get(
      `/client_part/rental_objects/prices?main_object=${data.main_object}&people_amount=${data.people_amount}&check_in_date=${data.check_in_date}&check_out_date=${data.check_out_date}`,
    )
  },

  createBooking(bookingParams: TransformedFormValues) {
    return instance.post<ResponseBookingData>(
      `/client_reservations/`,
      bookingParams,
    )
  },
}
