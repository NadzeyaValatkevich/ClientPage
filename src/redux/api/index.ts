import axios from "axios";
import { API_HOST } from "../../utils/config";

const instance = axios.create({
    baseURL: `http://${API_HOST}:8000/api`,
});

export const objectsApi = {
    getMainObject(id: number) {
        return instance.get(`/client_part/main_objects/${id}/`)
    },

    getRentalObjects() {
        return instance.get(`/client_part/rental_objects/`)
    }
};