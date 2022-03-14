import axios from "../helpers"
import { getcategoryConstant, getProductConstant } from "./constants";


export const addProduct = (form)=>{
    return async (dispatch)=>{
        //({type:getProductConstant.ADD_NEW_PRODUCT_REQUEST})
        const res = await axios.post('/product/create',form)

        console.log(res.data)
        if(res.status === 201){
            console.log(res.data)
           // dispatch({type:getProductConstant.ADD_NEW_PRODUCT_SUCCESS, 
           // payload:{category:res.data.category}
      //  });
        }else{
           // dispatch({type:getProductConstant.ADD_NEW_PRODUCT_FAILURE,payload:res.data.error})
        }
    }



}