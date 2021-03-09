import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./types"

const addToBasket = (product) => {
    return {
        type: ADD_TO_BASKET,
        payload: product
    }

}
const removeFromBasket = id => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: id
    }
}

export { addToBasket, removeFromBasket }