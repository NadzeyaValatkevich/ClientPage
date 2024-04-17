import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { objectsApi } from "../api";
import { DatesGuestsObjectRequestType } from "../types/datesGuestsTypes";

export const fetchFilteredRentalObjects = createAsyncThunk< undefined, DatesGuestsObjectRequestType> (
    'filteredRentalObjects/fetchFilteredRentalObjects',
    async (data, thunkAPI) => {
        try {
            const response = await objectsApi.getFilteredRentalObjects(data);

            if(response.status === 200) {
                return response.data
            } else {
                return thunkAPI.rejectWithValue({errors: response.data.message})
            }
        } catch(err: eny) {
            const error: AxiosError = err;
            return thunkAPI.rejectWithValue({errors: [error.message]})
        }

    }
)