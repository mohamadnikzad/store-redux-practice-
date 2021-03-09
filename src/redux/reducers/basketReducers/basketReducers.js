import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../../actions/basketActions/types"
// const initilaState = {
//     basket: []
// }

const basketReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            let item = action.payload
            let doplicate = state.find(x => x.id === item.id)
            if (doplicate) return state
            // state.filter(x => x.id !== item.id)
            return state = [...state, item]
        case REMOVE_FROM_BASKET:
            let id = action.payload
            const newBasket = state.filter(item => item.id !== id)
            return state = newBasket
        default:
            return state
    }
}

export default basketReducer