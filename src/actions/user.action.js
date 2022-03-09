 
import axios from "../helpers";
import { authConstants, userConstants } from "./constants";

export const signup = (user)=>{
    console.log(user);

    return async (dispatch) =>{
        dispatch({
            type:userConstants.USER_REGISTER_REQUEST
        })
        const res = await axios.post('/admin/signup',{
            ...user
        })

        if(res.status === 201){
            const {message} = res.data;
            dispatch({
                type:userConstants.USER_REGISTER_SUCCESS,
                payload : {
                    message:message
                }
            })
        }else{
            
            dispatch({
                type:userConstants.USER_REGISTER_FAILURE,
                payload : {
                    message : res.data.error
                }
            })
        }

    }

}