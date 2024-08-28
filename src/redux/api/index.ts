import axios from "axios";
import { API_HOST } from "../../utils/config";

const instance = axios.create({
    baseURL: `${API_HOST}/api`,
});

export const objectsApi = {
    getMainObject(id: number) {
        return instance.get(`/main_objects/client/${id}/`)
    },

    getRentalObjects() {
        return instance.get('/client_part')
    }
};