import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages // components
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      {/* switch - kad error page nemestu visur */}
      <Switch>
        {/* exact path shows only the chosen page */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        {/* url parameter = /: */}
        {/* in person component we grab specific data - id this time */}
        <Route path="/person/:id" children={<Person/>}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>

    </Router>
  );
};

export default ReactRouterSetup;

// for your own project you will have to do this: npm install react-router-dom
