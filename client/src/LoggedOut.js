import React from "react";
import Signup from "./SignUp";
import Login from "./Login";



function LoggedOut({setCurrentUser, currentUser}) {
    return(
        <div>
            <h1>Not Logged in. Please sign up or log in</h1>
            <Signup setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            <h1>or login</h1>
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
        </div>
    )
}

export default LoggedOut;