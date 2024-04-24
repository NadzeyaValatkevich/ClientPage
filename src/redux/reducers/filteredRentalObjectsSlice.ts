import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchFilteredRentalObjects } from "../thunks/filteredRentalObjectThunk";
import { RentalObjectsResponseData } from "../types/rentalObjectTypes";

const filteredRentalObjectsSlice = createSlice({
    name: "filteredRentalObjects",
    initialState: {} as RentalObjectsResponseData,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilteredRentalObjects.fulfilled, (_, action: PayloadAction<RentalObjectsResponseData>) => {
            return action.payload
        })
    }
});

export default filteredRentalObjectsSlice.reducer;

