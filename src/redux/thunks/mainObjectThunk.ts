import { createAsyncThunk } from "@reduxjs/toolkit";
import { objectsApi } from "../api";
import { AxiosError } from "axios";
import { MainObjectType } from "../types/mainObjectTypes";

export const fetchMainObject = createAsyncThunk<MainObjectType, number>(
    'mainObject/fetchMainObject',
    async (id, thunkAPI) => {
        try {
            const response = await objectsApi.getMainObject(id);
            if(response.status === 200) {             
                return response.data
            } else {
                return thunkAPI.rejectWithValue({errors: response.data.message})
            }
        } catch(err: any) {
            const error: AxiosError = err;
            return thunkAPI.rejectWithValue({errors: [error.message]})          
        }
        
    }
)