import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: JSON.parse(localStorage.getItem('Bag')) || []
    },

    reducers: {
        addProduct(state, action) {
            state.products.push({
                id: action.payload.id,
                count: 1
            })
        },
        removeProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        },
        increment(state, action) {
            state.products = state.products.map(item => {
                if (item.id === action.payload.id) { item.count++ }
                return item
            })
        },
        decrement(state, action) {
            state.products = state.products.map(item => {
                if (item.id === action.payload.id) { item.count-- }
                return item
            })
        },
        removeAllProduct(state, action) {
            state.products = []

        },
    },
});

export const { addProduct, removeProduct, increment, decrement, removeAllProduct } = productSlice.actions

export default productSlice.reducer