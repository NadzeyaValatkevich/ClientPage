import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchRentalObjects } from "../thunks/rentalObjectsThunk";
import { RentalObjectType } from "../types/rentalObjectsTypes";

const rentalObjectsSlice = createSlice({
    name: "rentalObjects",
    initialState: {} as RentalObjectType,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRentalObjects.fulfilled, (_, action: PayloadAction<RentalObjectType>) => {
            return action.payload 
        })
    }
});

export default rentalObjectsSlice.reducer;