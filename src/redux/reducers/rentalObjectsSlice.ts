import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchRentalObjects } from "../thunks/rentalObjectsThunk";
import { RentalObjectsResponseData } from "../types/rentalObjectTypes";

const rentalObjectsSlice = createSlice({
    name: "rentalObjects",
    initialState: {} as RentalObjectsResponseData,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRentalObjects.fulfilled, (_, action: PayloadAction<RentalObjectsResponseData>) => {
            return action.payload 
        })
    }
});

export default rentalObjectsSlice.reducer;