import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './components/home-component/HomeComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { RegisterComponent } from './components/register-component/RegisterComponent';
import { DashboardComponent } from './components/dashboard-component/DashboardComponent';

const App = () => {
  return (
    <>
      <Router>
        <NavbarComponent/>
        <switch>
          <Route path="/login" component={HomeComponent} />
          <Route path = "/register" component = {RegisterComponent}/>
          <Route path = "/dashboard" component = {DashboardComponent}/>
        </switch>
      </Router>
    </>
  )
}

export default App;
