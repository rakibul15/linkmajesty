import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectRoute = ({children}) => {

  const {pathname} = useLocation()
  const {isLoggedIn} = useSelector(state => state.user);
  console.log("isLoggedIn",isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace/>
  }
  return children;
}





export default ProtectRoute;
