import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {AppProvider} from './contex/app'
import {Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import {useDispatch} from "react-redux";
import {Layout} from "antd";

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
      </Routes>
    </AppProvider>
  );
}

export default App;
