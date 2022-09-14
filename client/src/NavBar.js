import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PetSitters from "./PetSitters";
import Signup from "./SignUp";
import MyAccount from "./MyAccount";



function NavBar() {
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
  
          <hr />
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/petsitters">
              <PetSitters />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/myaccount">
              <MyAccount/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default NavBar;