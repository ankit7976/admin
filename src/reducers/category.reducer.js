import { getcategoryConstant } from "../actions/constants";


const initalState = {
    categories : [],
    error:null,
    loading:false
}

export default (state = initalState, action)=>{
    switch(action.type){
        case getcategoryConstant.GET_ALL_CATEGORY_SUCCESS : state = {
            ...state,
            categories : action.payload.categories,
        }
        break;
    }
    return state
}