import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMainObject } from "../thunks/mainObjectThunk";
import { MainObjectType } from "../types/mainObjectTypes";

const mainObjectSlice = createSlice({
    name: "mainObject",
    initialState: {} as MainObjectType,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMainObject.fulfilled, (_, action: PayloadAction<MainObjectType>) => {
            return action.payload
        })
    }
});

export default mainObjectSlice.reducer;