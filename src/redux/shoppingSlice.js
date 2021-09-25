import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    ids: [],
    quantityById: {},
    pricesById: {},
    persons: 1
};


export const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, price } = action.payload;

            state.pricesById[id] = price;

            if (state.ids.includes(id)) {
                state.quantityById[id]++;
            } else {
                state.ids.push(id);
                state.quantityById[id] = 1;
            }
        },
        removeFromCart: (state, action) => {
            const { id, price } = action.payload;
            console.log("price", price);
            state.total -= price;

            if (state.quantityById[id] > 1) {
                state.quantityById[id]--;
            } else {
                const index = state.ids.indexOf(id);
                if (index !== -1) {
                    state.ids.splice(index, 1);
                }
            }
        },
        addPerson: (state) => {
            state.persons++;
        },
        removePerson: (state) => {
            if (state.persons > 1) {
                state.persons--;
            }
        }
    }
})

export const shoppingSelector = (state) => {

    return state.shopping.ids.map((id) => (
        {id, quantity: state.shopping.quantityById[id]}
    ));
}

export const selectTotal = (state) => {
    let total = 0;
    state.shopping.ids.forEach((id) => {
        const price  = state.shopping.quantityById[id] * state.shopping.pricesById[id];
        total += price;
    });

    const result = total * state.shopping.persons;
    return result.toFixed(2);
}

export const selectCount = (state) => state.shopping.ids.length;

export const selectPersons = (state) => state.shopping.persons;


export const { addToCart, removeFromCart, addPerson, removePerson } = shoppingSlice.actions;


export default shoppingSlice.reducer;