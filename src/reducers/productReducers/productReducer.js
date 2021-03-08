import { GET_PRODUCT_CATEGORY_FAIL, GET_PRODUCT_CATEGORY_REQ, GET_PRODUCT_CATEGORY_SUCSESS, GET_PRODUCT_DETAIL_FAIL, GET_PRODUCT_DETAIL_REQ, GET_PRODUCT_DETAIL_SUCSESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCSESS } from "../../actions/productActions/types";

const initialState = {
    product: [],
    loading: null,
    error: null,
    productDetail: {},
    productsByCat: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST || GET_PRODUCT_DETAIL_REQ || GET_PRODUCT_CATEGORY_REQ:
            return { loading: true }
        case GET_PRODUCT_SUCSESS: {
            return { ...state, loading: false, product: action.payload, error: null }
        }
        case GET_PRODUCT_FAIL || GET_PRODUCT_DETAIL_FAIL || GET_PRODUCT_CATEGORY_FAIL: {
            return { loading: false, error: action.payload, }
        }

        case GET_PRODUCT_DETAIL_SUCSESS: {
            return { ...state, loading: false, productDetail: action.payload, error: null }
        }

        case GET_PRODUCT_CATEGORY_SUCSESS: {
            return { ...state, loading: false, productsByCat: action.payload, error: null }
        }
        default:
            return state;
    }
}


export default productReducer