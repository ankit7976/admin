import axios from "../helpers"
import { getcategoryConstant, getProductConstant } from "./constants";

export const getinitialData = ()=>{
    return async dispatch =>{
       const res = await axios.post('/initaldata')
       if(res.status == 201){
           const {categories,product} = res.data;
           dispatch({
               type: getcategoryConstant.GET_ALL_CATEGORY_SUCCESS,
               payload:{categories}
           });
           dispatch({
            type: getProductConstant.GET_ALL_PRODUCT_SUCCESS,
            payload:{product}
        })
       }
       console.log(res);
    }
}
