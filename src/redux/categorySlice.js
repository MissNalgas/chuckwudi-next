import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "all"
};


export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { setFilter } = categorySlice.actions;

export const selectFilter = (state) => state.category.filter;

export default categorySlice.reducer;