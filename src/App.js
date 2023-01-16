import logo from './logo.svg';
import './App.css';

import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Homepage from "./components/Homepage"

function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
      
    </div>
  )
}
//Week 2 Eercisese SEtting up the app components
export default App