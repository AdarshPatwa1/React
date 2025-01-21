import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) =>{
            // directly modifying state overhere
            // Redux Toolkit uses "immer" BTS
            state.items.push(action.payload);
            
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK - either Mutate the existing state or return a new state return {items: []};
            state.items.length = 0;
            // return {items: []}; // this new {} will be replaced inside original state 
        },
     },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;