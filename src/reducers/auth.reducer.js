import { authConstants } from "../actions/constants"

const initalState = {
    name:'ank'
}


export default (state = initalState,action)=>{
    console.log(action)
    switch(action.type){
        case authConstants.LOGIN_REQUEST : {
            state = {
                ...state,
                ...action.payload
            }
            
        }
        break;
    }
    return state;
}