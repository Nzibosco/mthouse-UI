import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { DashboardComponent } from './components/dashboard-component/DashboardComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import RegisterContainer from './components/register-component/RegisterContainer';
import HomeContainer from './components/home-component/HomeContainer';

const App = () => {
  return (

<div>
    <Provider store={store}>
      <Router>
        <NavbarComponent />
        <Switch> 
          <Route path="/register" component={RegisterContainer} />
          <Route path="/dashboard" component={DashboardComponent} />
          <Route path="" component={HomeContainer} />
        </Switch>
      </Router>
    </Provider>
</div>
  )
}

export default App;
