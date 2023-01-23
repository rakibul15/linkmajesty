import logo from './logo.png';
import './App.css';
import React, {useEffect, useState} from "react";
import {AppProvider} from './contex/app'
import {Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import {useDispatch} from "react-redux";
import {Layout} from "antd";
import Earnings from "./components/Earnings/Earnings";
import Profile from "./components/profile/Profile";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import PasswordReset from "./components/Auth/PasswordReset";
import API from "./service/Api";
import {setUser} from "./reducers/user.reducer";
import ProtectRoute from "./components/Auth/protectedRoute/ProtectedRoute";
import './css/style.css'
import Payment from "./components/payment/Payment";
import Validate from "./components/Auth/Validate";
import NewPassword from "./components/Auth/NewPassword";

const {Header, Content} = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const contextValue = {collapsed, setCollapsed, logo};
  const HTTP_UNAUTHORIZED = 401
  const NOT_FOUND = 404

  useEffect(() => {
    const responseInterceptor = API.interceptors.response.use(
      (res) => {
        if (res.data.status === false) {
          localStorage.clear();
          dispatch(setUser(""));
          navigate("/signin");
          return
        }
        return res;
      },
      (error) => {
        if (error.response.status === HTTP_UNAUTHORIZED) {
          localStorage.clear();
          dispatch(setUser(""));
          navigate("/signin");
          return
        }
        return Promise.reject(error);
      }
    );
    return () => {
      API.interceptors.response.eject(responseInterceptor);
    };
  }, []);


  return (
    <AppProvider value={contextValue}>
      <Routes>
        <Route path="/" element={<ProtectRoute> <Dashboard/></ProtectRoute>} exact/>
        <Route path="/earnings" element={<ProtectRoute> <Earnings/></ProtectRoute>} exact/>
        <Route path="/payment" element={<ProtectRoute> <Payment/></ProtectRoute>} exact/>
        {/*<Route path="/profile" element={<ProtectRoute> <Profile/></ProtectRoute>} exact/>*/}
        <Route path="/profile" element={<Profile/>} exact/>
        <Route path="/signup" element={<Signup/>} exact/>
        <Route path="/signin" element={<Signin/>} exact/>
        <Route path="/reset-password" element={<PasswordReset/>} exact/>
        <Route path="/validate" element={<Validate/>} exact/>
        <Route path="/new-password" element={<NewPassword/>} exact/>
      </Routes>
    </AppProvider>
  );
}

export default App;
