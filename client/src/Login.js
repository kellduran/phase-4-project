import React, { useState } from "react";
import {useHistory} from 'react-router-dom'



function Login({ setCurrentUser }) {

    const history = useHistory()

    const [loggedIn, setLoggedIn] = useState({
        username: "",
        password: ""
        })

        const handleChange = (e) => {
            setLoggedIn({
              ...loggedIn,
              [e.target.name]: e.target.value,
            });
          };

        const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(loggedIn),
        }).then((res) => {
            if (res.ok) {
            res.json().then((user) => {
                setCurrentUser(user);
                history.push('/')
            });
            } else {
            res.json().then((errors) => {
                console.error(errors);
            });
            }
        });
        };
          
          


    return(
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Username"
                name="username"
                value={loggedIn.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                value={loggedIn.password}
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
}

export default Login;