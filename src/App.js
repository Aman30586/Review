import React from 'react'
import "./App.css";
import {Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/signup';
import Login from './components/login';

const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/signup">
        <Signup/>
      </Route>
    </>
  )
}

export default App