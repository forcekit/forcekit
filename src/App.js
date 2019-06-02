import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './containers/Home/Home';
import FacebookMobileLayout from './containers/Facebook/MobileLayout/MobileLayout';

function App() {
  return (
  	<Router>
	    <div className="App">
	    	<Route path="/" exact component={Home} />
	      	<Route path="/facebook" component={FacebookMobileLayout} />
	    </div>
    </Router>
  );
}

export default App;
