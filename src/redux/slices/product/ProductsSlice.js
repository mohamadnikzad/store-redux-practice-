import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://fakestoreapi.com/products';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    featured: [],
    product: {},
    loading: true,
  },
  reducers: {
    setProducts: (state, action) => {
      state.loading = true;
      state.products = action.payload;
      state.loading = false;
    },
    setSingleProduct: (state, action) => {
      state.loading = true;
      state.product = action.payload;
      state.loading = false;
    },
    setFeaturedProducts: (state, action) => {
      state.loading = true;
      state.featured = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setProducts,
  setSingleProduct,
  setFeaturedProducts,
} = productsSlice.actions;

export const fetchAsyncProduct = (id, category) => async (dispatch) => {
  let dynamicApi = api;
  if (id) dynamicApi = `${api}/${id}`;
  if (category) dynamicApi = `${api}/category/${category}`;
  try {
    const {data} = await axios.get(dynamicApi);
    if (!category && !id) dispatch(setProducts(data));
    id && dispatch(setSingleProduct(data));
    category && dispatch(setFeaturedProducts(data));
  } catch (error) {
    console.log(error);
  }
};

export default productsSlice.reducer;
