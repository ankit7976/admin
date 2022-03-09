import React from "react";
import { Route,Navigate, Routes, Outlet  } from "react-router-dom";

// const PrivateRoute = ()=>  <Route {...rest} render={(props) => {
   
//     if (token) {
//         return <Element {...props} />;
//     } else {
//         return <Navigate to={"/signin"} />;
//     }
// } } /> 


const PrivateRoute = () => {
    const token = window.localStorage.getItem('token');

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return token ?   <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute