import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages';
import Insurance from './pages/insurance';

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/insurance-policy' component={Insurance} exact />
         <Route path='/self-schedule' onClick={() => {window.open('https://pteverywhere.com/PtE/2ndtonone/bookingonline', '_blank')}}/>
        <Route path='/register' onClick={() => {window.open('https://pteverywhere.com/PtE/s/2ndtonone/register', '_blank')}}/>
        <Route exact path="/seminar-signup" onClick={() => {window.open('https://crystal-signup.web.app/', '_blank')}}/>
        <Route exact path="/admin" onClick={() => {window.open('https://crystal-signup.web.app/admin', '_blank')}}/> 
      </Switch>
    </Router>
  );
}

export default App;
