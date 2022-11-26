import logo from './logo.png';
import './App.css';
import React, {useState} from "react";
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

const {Header, Content} = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const contextValue = {collapsed, setCollapsed, logo};
  return (
    <AppProvider value={contextValue}>
      <Routes>
        <Route path="/" element={<Dashboard/>} exact/>
        <Route path="/earnings" element={<Earnings/>} exact/>
        <Route path="/profile" element={<Profile/>} exact/>
        <Route path="/signup" element={<Signup/>} exact/>
        <Route path="/signin" element={<Signin/>} exact/>
        <Route path="/reset-password" element={<PasswordReset/>} exact/>
      </Routes>
    </AppProvider>
  );
}

export default App;
