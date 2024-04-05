import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainObjectApi } from "../api";
import { AxiosError } from "axios";

export const fetchRentalObjects = createAsyncThunk<{rentalObjects: any}, number>(
    'rentalObjects/fetchRentalObjects',
    async (id, thunkAPI) => {
        try {
            const response = await mainObjectApi.getRentalObjects(id);
            if(response.status === 200) {
                return {rentalObjects: response.data}
            } else {
                return thunkAPI.rejectWithValue({errors: response.data.message})
            }
        } catch(err: any) {
            const error: AxiosError = err;
            return thunkAPI.rejectWithValue({errors: [error.message]})                    
        }
        
    }
)