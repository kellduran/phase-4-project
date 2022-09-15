// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import theme from "./theme"

// const LinkContainer = styled.div`
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: ${theme.darkGray}
// `
// const LinkStyle = styled(Link)`

// font-family: 'Overlock', cursive;
// background-color: gray 
// color: white;
// padding: 5px 10px;
// border-radius: 5px;
// margin: 10px;
// color: white;
// }
// `
// LinkContainer.LinkStyle = LinkStyle

// export default LinkContainer

import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer= styled.nav`
width: 100%;
height:50px;
background-color: #gray;
display: flex;
flex-direction: column;`
;

 export const NavbarLinkContainer = styled.div`
     display: flex;`

 export const NavbarLink = styled(Link)`
 color:#8884ffff;
 font-size: x-large;
 font-family: 'Overlock', cursive;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: #d7bce8ff;
}
&:active{
    color: red;
};`