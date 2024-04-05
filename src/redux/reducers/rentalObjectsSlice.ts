import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMainObject } from "../thunks/mainObjectThunk";
import { mainObjectApi } from './../api/index';
import { fetchRentalObjects } from "../thunks/rentalObjectsThunk";

type RentalObjectsState = {
    rentalObjects: any
};

const initialState: RentalObjectsState = {
    rentalObjects: {}
};

const rentalObjectsSlice = createSlice({
    name: "rentalObjects",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRentalObjects.fulfilled, (state, action: PayloadAction<any>) => {
            state.rentalObjects = action.payload 
        })
    }
});

export default rentalObjectsSlice.reducer;