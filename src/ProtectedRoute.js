import React, { useContext } from "react";
import { CardContext } from "./Context";
import { Navigate } from "react-router-dom" ; 

export default function ProtectedRoute({ children , redirectTo}) {
  const [ user ] = useContext(CardContext) ;

  return user ? children : <Navigate to={redirectTo} /> ;
}
