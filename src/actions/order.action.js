 
import axios from "../helpers";
import { orderConstant } from "./constants";
 

export const getCustomerOrders = ()=>{
 
    return async (dispatch) =>{
        dispatch({type:orderConstant.GET_CUSTOMER_ORDER_REQUEST})
     try{

        const res = await axios.post('/order/getCustomerOrders')
        console.log(res)
       if(res.status === 200){
         const {orders} = res.data;
        dispatch({
            type:orderConstant.GET_CUSTOMER_ORDER_SUCCESS,
            payload:{orders}
        })
   
       }else{
        dispatch({
            type:orderConstant.GET_CUSTOMER_ORDER_FAILURE,
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



export const updateOrder = (payload)=>{
 
    return async (dispatch) =>{
        dispatch({type:orderConstant.UPDATE_CUSTOMER_ORDER_REQUEST})
     try{

        const res = await axios.post('/order/update', payload)
        console.log(res)
       if(res.status === 201){
         
        dispatch({
            type:orderConstant.UPDATE_CUSTOMER_ORDER_SUCCESS})
            dispatch(getCustomerOrders())
       }else{
        dispatch({
            type:orderConstant.UPDATE_CUSTOMER_ORDER_FAILURE,
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


