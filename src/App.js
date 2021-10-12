import React from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Data from './Data';
import List from './List';





function App ()
{  
  
  return(
    <>
   
  <Router>
    <Switch>

     <Route exact path="/" component={Nav}/>
     
    
    </Switch>
  </Router>
 
   
   </>
    );
   
}

export default App;
