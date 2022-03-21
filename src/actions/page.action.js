 
import axios from "../helpers";
import { pageConstants } from "./constants";

export const createPage = (form)=>{
    console.log(form)
    return async (dispatch) =>{
        dispatch({type:pageConstants.PAGE_CREATE_REQUEST})
     try{

        const res = await axios.post('/page/create', form)

       if(res.status === 201){
        dispatch({
            type:pageConstants.PAGE_CREATE_SUCCESS,
            payload :{
                page:res.data.page
            }
        })
       }else{
        dispatch({
            type:pageConstants.PAGE_CREATE_FAILURE,
            payload :{
               error : res.data.error
            }
        })
       }

     }catch(error){
        console.log(error)
     }  
      
    }
}


