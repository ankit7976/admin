import axios from "../helpers"
import { getcategoryConstant, getProductConstant,orderConstant } from "./constants";

export const getinitialData = ()=>{
    return async dispatch =>{
       const res = await axios.post('/initaldata')
       if(res.status == 201){
           const {categories,product,orders} = res.data;
           dispatch({
               type: getcategoryConstant.GET_ALL_CATEGORY_SUCCESS,
               payload:{categories}
           });
           dispatch({
            type: getProductConstant.GET_ALL_PRODUCT_SUCCESS,
            payload:{product}
        });
        dispatch({
            type: orderConstant.GET_CUSTOMER_ORDER_SUCCESS,
            payload:{orders}
        });
       }
       console.log(res);
    }
}
