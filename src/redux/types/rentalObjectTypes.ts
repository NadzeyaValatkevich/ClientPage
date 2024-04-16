import { ResponseData } from "./@types";

export type RentalObjectsTypes = "Домик" | "Комната" |"Номер" | "Кемп" | "Место под палатку" | "Стояночное место автодома"; 

export type RentalObjectStatuses = "Доступен к бронированию" | "Закрыт к бронированию" |"Техобслуживание"; 


export type RentalObjectType = {
    id: number,
    title: RentalObjectsTypes
};

export type RentalObjectStatus = {
    id: number,
    title: RentalObjectStatuses
};

export type ImageItem = {
    id: number,
    image: string
};

export type TotalBeds = {
    double_bed: number,
    single_bed: number,
    children_bed: number,
    extra_sleeping_place: number
};

export type RentalObject = {
    id: number,
    name: string,
    description: string,
    object_type: RentalObjectType,
    status: RentalObjectStatus,
    images: ImageItem[],
    features: [],
    rooms: string[],
    total_beds: TotalBeds,
    reservations: []
};

export type RentalObjectsList = RentalObject[];
export type RentalObjectsResponseData = ResponseData<RentalObjectsList>