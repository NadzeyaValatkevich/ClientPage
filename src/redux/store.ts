import { combineReducers, configureStore } from "@reduxjs/toolkit";
import datesGuestsObjectReducer from "./reducers/datesGuestsSlice";
import mainObjectReducer from "./reducers/mainObjectSlice";
import rentalObjectsReducer from "./reducers/rentalObjectsSlice";
import filteredRentalObjectsSlice from "./reducers/filteredRentalObjectsSlice";

const rootReducer = combineReducers({
    mainObject: mainObjectReducer,
    rentalObjects: rentalObjectsReducer,
    datesGuestsObject: datesGuestsObjectReducer,
    filteredRentalObjects: filteredRentalObjectsSlice,
});

export const store = configureStore ({
    reducer: rootReducer,

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;