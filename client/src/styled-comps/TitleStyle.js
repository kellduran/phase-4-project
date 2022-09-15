import React from "react";
import styled from "styled-components";
import theme from "./theme"

const TitleStyle = styled.h1`

font-family: 'Overlock', cursive;
background-color: ${theme.buttonColor};
color: white;
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;


`

const LoginStyle = styled.h1`

font-family: 'Overlock', cursive;
color: ${theme.purPink};
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;


`

TitleStyle.LoginStyle = LoginStyle

export default TitleStyle