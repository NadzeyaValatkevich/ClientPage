import { ReactNode } from 'react'
import { ResponseData } from './@types'

export type RentalObjectsTypes =
  | 'Домик'
  | 'Комната'
  | 'Номер'
  | 'Кемп'
  | 'Место под палатку'
  | 'Стояночное место автодома'

export type RentalObjectStatuses =
  | 'Доступен к бронированию'
  | 'Закрыт к бронированию'
  | 'Техобслуживание'

export type RentalObjectType = {
  id: number
  title: RentalObjectsTypes
}

export type RentalObjectStatus = {
  id: number
  title: RentalObjectStatuses
}

export type FeatureItem = {
  name: string
  logo: string
}

export type TransformFeatureItem = {
  name: string
  logo: ReactNode
  title: string
}

export type ImageItem = {
  id: number
  image: string
}

export type TotalBeds = {
  double_bed: number
  single_bed: number
  children_bed: number
  extra_sleeping_place: number
}

export type ReservationItem = {
  check_in_date: string
  check_out_date: string
}

export type RentalObject = {
  id: number
  name: string
  description: string
  object_type: RentalObjectType
  status: RentalObjectStatus
  max_places: number
  images: ImageItem[]
  features: FeatureItem[]
  rooms: string[]
  total_beds: TotalBeds
  check_in_time: string
  check_out_time: string
  reservations: ReservationItem[]
  price?: number
}

export type RentalObjectsList = RentalObject[]
export type RentalObjectsResponseData = ResponseData<RentalObjectsList>
