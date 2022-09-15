import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PetSitters from "./PetSitters";
import Signup from "./SignUp";
import MyAccount from "./MyAccount";
import {NavbarContainer,NavbarLinkContainer, NavbarLink} from "./styled-comps/NavbarContainer"



function NavBar() {
    return(
        <BrowserRouter>
        <NavbarContainer>
          <NavbarLinkContainer>
  
              <NavbarLink to="/">Home</NavbarLink>
          
         
              <NavbarLink to="/petsitters">PetSitters</NavbarLink>
     
       
              <NavbarLink to="/signup">Signup</NavbarLink>
       
        
              <NavbarLink to="/login">Login</NavbarLink>

              <NavbarLink to="/myaccount">My Account</NavbarLink>

          </NavbarLinkContainer>
  
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
        </NavbarContainer>
      </BrowserRouter>
    )
}

export default NavBar;