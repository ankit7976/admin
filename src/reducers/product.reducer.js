import { getProductConstant } from "../actions/constants"

const initalState = {
    products: []
}

export default (state = initalState, action) => {

    switch (action.type) {
        case getProductConstant.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.product
            }
    }

    return state;

}