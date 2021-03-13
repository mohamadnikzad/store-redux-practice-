import {configureStore} from '@reduxjs/toolkit';
import productRedcuers from './slices/product/ProductsSlice';
import cartReducers from './slices/cart/cartSlice';

const store = configureStore({
  reducer: {
    products: productRedcuers,
    cart: cartReducers,
  },
});

export default store;
