import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PetSitters from "./PetSitters";
import Signup from "./SignUp";
import MyAccount from "./MyAccount";
import {NavbarContainer,NavbarLinkContainer, NavbarLink} from "./styled-comps/NavbarContainer"



function NavBar() {



  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [appts, setAppts] = useState([])


  

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


  console.log(setCurrentUser)


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
              <PetSitters currentUser={currentUser}/>
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/myaccount">

              <MyAccount appts={appts} currentUser={currentUser}/>
            </Route>
            <Route exact path= "/pets/:id">
              <UpdatePet currentUser={currentUser}/>
            </Route>
            <Route path="/logout">
              <LoggedOut setCurrentUser={setCurrentUser} currentUser={currentUser}/>

            </Route>
          </Switch>
        </NavbarContainer>
      </BrowserRouter>
    )
}

export default NavBar;