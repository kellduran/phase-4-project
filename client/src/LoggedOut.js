import React from "react";
import Signup from "./SignUp";
import Login from "./Login";



function LoggedOut() {
    return(
        <div>
            <h1>Not Logged in. Please sign up or log in</h1>
            <Signup />
            <h1>or login</h1>
            <Login />
        </div>
    )
}

export default LoggedOut;