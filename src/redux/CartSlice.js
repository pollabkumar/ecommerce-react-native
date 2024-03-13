import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.push(action.payload);
        },
        removeItemFromCart: (state, action) => {
            return state.filter((item, index) => index !== action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;