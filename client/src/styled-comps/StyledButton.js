import React from "react";
import styled from "styled-components";
import theme from "./theme"

const Button = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.buttonColor};
color: white;
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;


`
const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const HomeButton = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.buttonColor};
color: white;
border: none;
padding: 5px 5px;
border-radius: 4px;
margin: 5px;


`

Button.Container = Container
Button.HomeButton = HomeButton

export default Button