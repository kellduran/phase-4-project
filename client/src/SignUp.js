import React from "react";


function Signup() {
    return(
        <div>
            <h1>Sign up page</h1>
            <form>
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="password"></input>
                <input type="text" placeholder="confirm password"></input>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;