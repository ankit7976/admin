import React from "react";
import { Route,Navigate  } from "react-router-dom";

const PrivateRoutes = ({element:Element,...rest})=>{
    return <Route {...rest} element={(props)=>{
        const token = window.localStorage.getItem('token');
        if(token) {
            return <Element {...props} />
        }else{
            return <Navigate to={"/signin"} />
        }
    }} />

}

export default PrivateRoutes