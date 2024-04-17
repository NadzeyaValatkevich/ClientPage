import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const filteredRentalObjectsSlice = createSlice({
    name: "filteredRentalObjects",
    initialState: {} as any,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilteredRentalObjects.fulfilled, (_, action: PayloadAction<any>) => {
            return action.payload
        })
    }
});

export default filteredRentalObjectsSlice.reducer;

