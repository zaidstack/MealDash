import { addListener, createSlice, removeListener } from "@reduxjs/toolkit"
import { Action } from "@remix-run/router"
import { act } from "react";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
         items: []
    },
    reducers: {
        addItem : (state, action) =>{
              state.items.push(action.payload);
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
             state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart } =cartSlice.actions;

export default cartSlice.reducer;