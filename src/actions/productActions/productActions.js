import axios from "axios"
import { GET_PRODUCT_CATEGORY_FAIL, GET_PRODUCT_CATEGORY_REQ, GET_PRODUCT_CATEGORY_SUCSESS, GET_PRODUCT_DETAIL_FAIL, GET_PRODUCT_DETAIL_REQ, GET_PRODUCT_DETAIL_SUCSESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCSESS } from "./types"

// const fetchData = (data) => {
//     return {
//         type: GET_PRODUCT_SUCSESS,
//         payload: data
//     }
// }

const fetchProduct = () => async (dispach) => {
    try {
        dispach({ type: GET_PRODUCT_REQUEST })
        const { data } = await axios.get('https://fakestoreapi.com/products')
        dispach({
            type: GET_PRODUCT_SUCSESS,
            payload: data
        })
    } catch (error) {
        dispach({
            type: GET_PRODUCT_FAIL,
            payload: error.message
        })
    }
}

export const fetchProductDetail = (productId) => async (dispach) => {
    try {
        dispach({ type: GET_PRODUCT_DETAIL_REQ })
        const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispach({
            type: GET_PRODUCT_DETAIL_SUCSESS,
            payload: data
        })
    } catch (error) {
        dispach({
            type: GET_PRODUCT_DETAIL_FAIL,
            payload: error.message
        })
    }
}

export const fetchProductByCategory = (productCategoty) => async (dispach) => {
    try {
        dispach({ type: GET_PRODUCT_CATEGORY_REQ })
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${productCategoty}`)
        dispach({
            type: GET_PRODUCT_CATEGORY_SUCSESS,
            payload: data
        })
    } catch (error) {
        dispach({
            type: GET_PRODUCT_CATEGORY_FAIL,
            payload: error.message
        })
    }
}
export default fetchProduct
