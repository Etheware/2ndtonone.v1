import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
         <Route path='/' component={Home} exact />
         <Route path='/login' component={Home} exact />
         <Route path='/self-schedule' component={()=> window.open('https://pteverywhere.com/PtE/2ndtonone/bookingonline', '_blank')}/>
         <Route path='/registration' component={() => window.open('https://pteverywhere.com/PtE/s/2ndtonone/register',  '_blank')}/>
         <Route path='/yelp' component={() => window.open('https://pteverywhere.com/PtE/s/2ndtonone/register')}/>
         <Route path='/social-media' component={(Home) => window.open('https://pteverywhere.com/PtE/s/2ndtonone/register')}/>
      </Switch>
    </Router>
  );
}

export default App;
