import React from 'react';
import "./app.css";

import Nav from './components/Nav/Nav';

import AnimRoutes from './components/AnimRoutes/AnimRoutes';
import{BrowserRouter as Router} from 'react-router-dom';


const App = () => {
  return (
    <>
      
      <Router>
        <Nav />
        <AnimRoutes />

      </Router>

      

      
 
      

       
    </>
      

  );
};

export default App;
