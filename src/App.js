import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">   
      <Router>
      <Nav /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route
          path="/Project/:name"
          render={(routerProps) => <Project {...routerProps}/>}
        />
      </Switch>
      </Router>
       
    </div>
  );
}

export default App;