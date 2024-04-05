import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const mainObjectApi = {
    getMainObject(id: number) {
        return instance.get(`/main_objects/client/${id}/`)
    },

    // getRentalObjects(id: number) {
    //     return instance.get('/rental_objects')
    // }
};