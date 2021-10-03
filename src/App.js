// import logo from './logo.svg';
import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";
import Contact from './components/contact us/Contact';
import About from './components/about/About';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Navbar from './components/navbar';


    

export default function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        
        </Switch>
      
    </Router>
  );
}

