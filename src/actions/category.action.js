import axios from "../helpers"
import { getcategoryConstant } from "./constants";

 const getAllCategory = ()=>{
    return async (dispatch)=>{

        dispatch({type:getcategoryConstant.GET_ALL_CATEGORY_REQUEST})
        const res = await axios.get('/category/getcategory');

        if(res.status === 201){
            const {categoryList} = res.data;
            dispatch({
                type:getcategoryConstant.GET_ALL_CATEGORY_SUCCESS,
                payload : {
                    categories : categoryList,
                }
            })
        }else{
            dispatch({
                type:getcategoryConstant.GET_ALL_CATEGORY_FAILURE,
                payload : {
                    error : res.data.error 
                }
            })
        }
    }
} 

export const addCategory = (form)=>{
    return async (dispatch)=>{
       try{
        dispatch({type:getcategoryConstant.ADD_NEW_CATEGORY_REQUEST})
        const res = await axios.post('/category/create',form)
        if(res.status === 201){
            dispatch({type:getcategoryConstant.ADD_NEW_CATEGORY_SUCCESS,
            payload:{category:res.data.category}
        });
        }else{
            dispatch({type:getcategoryConstant.ADD_NEW_CATEGORY_FAILURE,
                payload:res.data.error})
        }
       }catch(error){
        console.log(error.response)
       }
    }
}


export const updateCategory = (form)=>{
    return async (dispatch)=>{
        dispatch({type:getcategoryConstant.UPDATE_CATEGORY_REQUEST})
        const res = await axios.post('/category/update',form)
        if(res.status === 201){
            dispatch({type:getcategoryConstant.UPDATE_CATEGORY_SUCCESS})
            dispatch(getAllCategory())
     
        }else{
            const {error} = res;
            dispatch({type:getcategoryConstant.UPDATE_CATEGORY_FAILURE,
            payload : {error}
            })
           
       
        }
    }
}

export const deleteCategories = (ids)=>{
    return async (dispatch)=>{
        dispatch({type:getcategoryConstant.DELETE_CATEGORY_REQUEST})
        const res = await axios.post('/category/delete',{
            payload: {
                ids
            }
        })
        if(res.status == 201){
            dispatch({type:getcategoryConstant.DELETE_CATEGORY_REQUEST})
            dispatch(getAllCategory())
          
           
        }else{
            dispatch({type:getcategoryConstant.DELETE_CATEGORY_FAILURE,
            payload: {error : res.data.error} 
            })
        }
       
         
        
    }
}

export {  
    getAllCategory
}