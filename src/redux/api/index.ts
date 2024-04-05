import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const objectsApi = {
    getMainObject(id: number) {
        return instance.get(`/main_objects/client/${id}/`)
    },

    getRentalObjects() {
        return instance.get('/client_part')
    }
};