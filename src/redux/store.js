import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { productCategoryReducer, productDetailReducer, productReducer } from './reducers/productReducers/productReducer';
import basketReducer from './reducers/basketReducers/basketReducers';

const rootReducer = combineReducers({
    products: productReducer,
    singleProduct: productDetailReducer,
    filterdProduct: productCategoryReducer,
    basket: basketReducer

})




export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))