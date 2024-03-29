import { combineReducers, configureStore } from "@reduxjs/toolkit";
import datesGuestsObjectReducer from "./reducers/datesGuestsSlice";

const rootReducer = combineReducers({
    datesGuestsObject: datesGuestsObjectReducer,

});

const store = configureStore ({
    reducer: rootReducer,

});

export default store;