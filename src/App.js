


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
 const [mode, setMod]= useState('light')//by default, the light mode for mode value

 let toggleMode=()=>{
  if(mode=='light'){
    setMod('dark')
    document.body.style.backgroundColor='rgb(33, 50, 72)'
  }
  else{
    setMod('light')
    document.body.style.backgroundColor='#fbf8f4'
  }
 }
  let changeBG = (cls) => {
    removeBG()
   document.body.classList.add("bg-"+cls)
  }

  let removeBG = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
  }

  return (
    <Router basename="/utils">
<Navbar title="UTIL" value="About" myMode={mode} toggle={toggleMode} bgActive={changeBG}/>
<div className="container my-3">
  <Switch>
    <Route path="/about">
    <About/>
    </Route>
    <Route path="/">
    <TextForm myMode={mode}/>
    </Route>
  </Switch>
</div>
  </Router>
  );
}

export default App;

