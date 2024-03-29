import { createSlice } from "@reduxjs/toolkit";
import { DatesGuestsObject } from "../types/datesGuestsTypes";

type DatesGuestsState = {
    datesGuestsData: DatesGuestsObject
};

const initialState: DatesGuestsState = {
    datesGuestsData: {
        checkInDate: null,
        checkOutDate: null,
        guests: {
            adults: null,
            children: null,
            childAges: []
        }
    }
};


const datesGuestsSlice = createSlice({
    name: "datesGuestsObject",
    initialState,
    reducers: {
        setDatesGuestsObject(state, action: any) {
            state.datesGuestsData = action.payload
        }
    }
});

export const {setDatesGuestsObject} = datesGuestsSlice.actions;

export default datesGuestsSlice.reducer;