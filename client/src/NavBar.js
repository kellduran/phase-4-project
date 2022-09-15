import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PetSitters from "./PetSitters";
import Signup from "./SignUp";
import MyAccount from "./MyAccount";
import Logout from "./Logout";
import LoggedOut from "./LoggedOut";



function NavBar() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
          console.log(currentUser.id)
        });
      }
    });
  }, []);

  // useEffect(()=> {
  //   fetch("/")
  // })

  if (!isAuthenticated) {
    return <div>
        {/* <h1>Not Authenticated</h1>
        <Signup></Signup>
        <h1>or login</h1>
        <Login></Login> */}
        <LoggedOut />
      </div>;
  }
  // return (
  //   <div className="app">
  //     <Router>{false ? <LoggedIn /> : <LoggedOut />}</Router>
  //   </div>
  // )

    return(
        <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/petsitters">PetSitters</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/myaccount">My Account</Link>
            </li>
          </ul>
          <Logout setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/>
  
          <hr />
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/petsitters">
              <PetSitters />
            </Route>
            <Route path="/signup">
              <Signup setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            </Route>
            <Route path="/login">
              <Login setCurrentUser={setCurrentUser}/>
            </Route>
            <Route path="/myaccount">
              <MyAccount currentUser={currentUser}/>
            </Route>
            <Route path="/logout">
              <LoggedOut setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default NavBar;