import { orderConstant } from "../actions/constants"


const initalState = {
    orders:[]
}


export default (state=initalState,action)=>{
    switch(action.type){
        case orderConstant.GET_CUSTOMER_ORDER_SUCCESS: state ={
            ...state,
            orders:action.payload.orders
        }
        break;
    }
    return state;
}