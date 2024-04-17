import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DatesGuestsObjectType } from "../types/datesGuestsTypes";

const datesGuestsSlice = createSlice({
    name: "datesGuestsObject",
    initialState: {} as DatesGuestsObjectType,
    reducers: {
        setDatesGuestsObject(_, action: PayloadAction<DatesGuestsObjectType>) {
            return action.payload
        }
    }
});

export const {setDatesGuestsObject} = datesGuestsSlice.actions;

export default datesGuestsSlice.reducer;