import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
 
 

// 1. This particular component shall be a wrapper which based on authentication status either redirects user back to login page or renders the same page;
// 2. if user is not logged in; user should be redirected to the login page;

const PrivateRoute = ({children}) => {

  const { isAuth, loading, error, error_message , token } = useSelector((store) => store.auth);

  if(!token){
     return <Navigate to="/login" />
  }

  return children ;
};

export default PrivateRoute;
