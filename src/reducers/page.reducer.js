import { pageConstants } from "../actions/constants"

const initalState = {
 error:null,
 loading:false,
 page:{}
}


export default (state = initalState,action)=>{
    switch(action.type){
 
             case pageConstants.PAGE_CREATE_REQUEST : 
             state = {
                 ...state,
                 loading:true
             }
             break;

             case pageConstants.PAGE_CREATE_SUCCESS : 
             state = {
                 page:action.payload.page,
                 loading:false
             }
             break;

             case pageConstants.PAGE_CREATE_FAILURE : 
             state = {
                 ...state,
                 loading:false,
                 error:action.payload.error
             }
             break;
    }
    return state;
}