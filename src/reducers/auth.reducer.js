import { authConstants } from "../actions/constants"

const initalState = {
   token:null,
   user:{
       fullName: '',
       lastName: '',
       email:'',
       picture:'',
   },
   authenticate:false,
   authenticating:false
}


export default (state = initalState,action)=>{
    console.log(action)
    switch(action.type){
        case authConstants.LOGIN_REQUEST : 
            state = {
                ...state,
                authenticating:true
            }
        break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user:action.payload,
                token:action.payload.token,
                authenticate:true,
                authenticating:false
            }
             break;
    }
    return state;
}