import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
import categoryReducer from "./categorySlice";

export const store = configureStore({
    reducer: {
        shopping: shoppingReducer,
        category: categoryReducer
    }
})