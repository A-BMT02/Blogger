import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Navigate } from "react-router-dom" ; 

export default function ProtectedRoute({ children , redirectTo}) {
  const [ user ] = useContext(UserContext) ;

  return user ? children : <Navigate to={redirectTo} /> ;
}
