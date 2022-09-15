import React, { useState } from "react";
import ReactDOM from "react-dom";
import BackgroundStyle from "./styled-comps/BackgroundStyle";
import StyledButton from "./styled-comps/StyledButton"
import StyledForm from "./styled-comps/StyledForm"
import TitleStyle from "./styled-comps/TitleStyle"

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <BackgroundStyle>
      <StyledForm onSubmit={handleSubmit}><TitleStyle.LoginStyle>Login</TitleStyle.LoginStyle>
        <div className="input-container">
    
          <StyledForm.Input type="text" name="uname" required placeholder="Username" />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">

          <StyledForm.Input type="password" name="pass" required placeholder="Password"/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <StyledButton type="submit">Login</StyledButton>
        </div>
      </StyledForm>
    </BackgroundStyle>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title"></div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;