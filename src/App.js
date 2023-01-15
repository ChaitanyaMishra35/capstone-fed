import logo from './logo.svg';
import './App.css';

import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App(){
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App