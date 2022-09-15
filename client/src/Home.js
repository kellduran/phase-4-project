import React from "react";
import BackgroundStyle from "./styled-comps/BackgroundStyle"
import TitleStyle from "./styled-comps/TitleStyle"
import StyledButton from "./styled-comps/StyledButton"
import StyledForm from "./styled-comps/StyledForm"

function Home() {
    return(
        <BackgroundStyle>
            
                <div>
                    <StyledForm><TitleStyle>Tall Tails</TitleStyle>
                        <StyledButton.HomeButton>Boarding</StyledButton.HomeButton>
                        <StyledButton.HomeButton>House Sitting</StyledButton.HomeButton>
                        <StyledButton.HomeButton>Drop-in Visits</StyledButton.HomeButton>
                        <StyledButton.HomeButton>Doggy Day Care</StyledButton.HomeButton>
                        <StyledButton.HomeButton>Dog Walking</StyledButton.HomeButton>
                        <StyledForm.HomeInput type="text" placeholder="enter zip code"></StyledForm.HomeInput>
                        <button>Search</button>
                    </StyledForm>
                </div>
        </BackgroundStyle>
    )
}

export default Home;