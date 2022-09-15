import React from "react";
import BackgroundStyle from "./styled-comps/BackgroundStyle";
import StyledButton from "./styled-comps/StyledButton"
import StyledForm from "./styled-comps/StyledForm"
import TitleStyle from "./styled-comps/TitleStyle"


function MyAccount() {
    return(
        <BackgroundStyle>
            <StyledForm><TitleStyle.LoginStyle>Upload your animal</TitleStyle.LoginStyle>
                <StyledForm.HomeInput type="text" placeholder="Pet name"></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="animal"></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="breed"></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="age"></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="size"></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="image"></StyledForm.HomeInput>
                <StyledButton>upload pet</StyledButton>
            </StyledForm>        
        </BackgroundStyle>
    )
}

export default MyAccount;