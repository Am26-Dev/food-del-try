import { useState } from "react"
import { Sidebar } from "./components/sidebar/sidebar.jsx";
import { Navbar } from "./components/Navbar/navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/add.jsx";
import List from "./pages/List/list.jsx";
import Order from "./pages/Order/order.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const url = "http://localhost:8080";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={ <Add url={url}/> }/>
        <Route path="/list" element={ <List url={url}/> }/>
        <Route path="/add" element={ <Order url={url}/> }/>
      </Routes>
      </div>
      
    </div>
  )
};

export default App
