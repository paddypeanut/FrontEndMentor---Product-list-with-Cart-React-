import {configureStore} from '@reduxjs/toolkit';
import cartSliceReducer from './cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer
    }
});