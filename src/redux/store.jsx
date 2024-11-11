import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./features/itemsSlice";
import countrySlice from "./features/CountrySlice";
import stateSlice from "./features/StateSlice";
export const store =  configureStore({
    reducer : {
       data : itemsSlice,
       country : countrySlice,
       state : stateSlice
    }
});

