import axios from "axios";
import { API_HOST } from "../../utils/config";
import { DatesGuestsObjectRequestType } from "../types/datesGuestsTypes";

const instance = axios.create({
    baseURL: `http://${API_HOST}:8000/api`,
});

export const objectsApi = {
    getMainObject(id: number) {
        return instance.get(`/client_part/main_objects/${id}/`)
    },

    getRentalObjects() {
        return instance.get(`/client_part/rental_objects/`)
    },

    getFilteredRentalObjects(data: DatesGuestsObjectRequestType) {
        return instance.get(`/client_part/rental_objects/prices?main_object=${data.main_object}&people_amount=${data.people_amount}&check_in_date=${data.check_in_date}&check_out_date=${data.check_out_date}`)
    }
};