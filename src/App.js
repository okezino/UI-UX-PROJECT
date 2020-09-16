import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Login from './screens/login'
import Home from './screens/home'
import Otpauth from './screens/form-login'
import Social from './screens/social-login'


function App() {
  return (
   <Router>
     <Route path="/" exact component={Home} /> 
     <Route path="/login"  component={Login} />
     <Route path="/otp"  component={Otpauth} /> 
     <Route path="/social"  component={Social} /> 
   </Router>
  );
}

export default App;
