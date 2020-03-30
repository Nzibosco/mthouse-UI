import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './components/home-component/HomeComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';

const App = () => {
  return (
    <>
      <Router>
        <NavbarComponent/>
        <switch>
          <Route path="/login" component={HomeComponent} />
        </switch>
      </Router>
    </>
  )
}

export default App;
