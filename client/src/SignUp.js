import React, { useState } from "react"; 
import BackgroundStyle from "./styled-comps/BackgroundStyle"
import NavbarContainer from "./styled-comps/NavbarContainer"
import StyledButton from "./styled-comps/StyledButton"
import StyledForm from "./styled-comps/StyledForm"
import theme from "./styled-comps/theme"
import TitleStyle from "./styled-comps/TitleStyle"



function Signup() {

    // const [currentUser, setCurrentUser] = useState() <---- workaround, thing i said
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const userCreds = { ...formData };
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user);
                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }

    console.log(setCurrentUser)

    return(
        <BackgroundStyle>
            <StyledForm onSubmit={handleSubmit}><TitleStyle>Sign up page</TitleStyle>
                <StyledForm.HomeInput type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange}></StyledForm.HomeInput>
                <StyledForm.HomeInput type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange}></StyledForm.HomeInput>
                <StyledForm.HomeInput type="password" placeholder="confirm password"></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange}></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="address" name="address" value={formData.address} onChange={handleChange}></StyledForm.HomeInput>
                
                <StyledButton type="submit">Sign Up</StyledButton>
            </StyledForm>
        </BackgroundStyle>
    )
}

export default Signup;