
import './App.css';
import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import LoginSignup from './Components/Login'
import Signup from './Components/Signup'
import History from './Components/History'
import Showcourses from './Components/Showcourses'
import Logout from './Components/Logout'
import Profile from './Components/Profile'
class App extends Component{




  render(){

  
    return(<>
    <Switch>
 
        <Route exact path="/">
          <Home  />
        </Route>
        <Route exact path="/login">
          <LoginSignup  />
        </Route>
        <Route exact path="/signup">
          <Signup  />
        </Route>
        <Route exact path="/history">
          <History  />
        </Route>
        <Route exact path="/courses">
          <Showcourses  />
        </Route>
        <Route exact path="/logout">
          <Logout  />
        </Route>
        <Route exact path="/profile">
          <Profile  />
        </Route>
    
    </Switch>

    </>);
  }
}

export default App;
