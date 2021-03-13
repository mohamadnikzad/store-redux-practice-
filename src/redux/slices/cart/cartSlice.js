import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const duplicate = state.cart.find((item) => item.id === product.id);
      if (duplicate) {
        alert('you already added this item to basket');
      } else {
        state.cart.push(action.payload);
      }
      //   duplicate ? (state.count += 1) : state.cart.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
});

export const {addToCart, removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;
