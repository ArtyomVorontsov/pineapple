import Styled from "styled-components";


export const FirstPagePart = Styled.div`
flex: 0.9;
height: auto;
display: flex; 
flex-direction: column;


@media only screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;
   ${props => props.theme.flex("column", "center", "center")}
   
}
`

export const SecondPagePart = Styled.div`
flex: 1;
height: auto;
background-image: url(${props => props.backgroundImage});

@media only screen and (max-width: 600px) {
    flex: 0;
    display: none;
}
`

export const Section = Styled.section`
display: flex; 
width: 100%;
flex-direction: row;
height: 153vh;
overflow: hidden;


@media only screen and (max-width: 600px) {
    height: 100vh;
    width: 100%;
    ${props => props.theme.flex("column", "center", "flex-start")}
    background-image: url(${props => props.backgroundImage});
}
`

export const NavBarWrapper = Styled.div`
flex: 5;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;

@media only screen and (max-width: 600px) {
    flex: 1;
}
`

export const ContentWrapper = Styled.div`
${props => props.theme.flex("column", "center", "flex-start")}
flex: 10;
width: 100%;
box-sizing: border-box;

.mobileWrapper{
    box-sizing: border-box;
    ${props => props.theme.flex("column", "center", "flex-start")}
    width: 100%;
}

@media only screen and (max-width: 600px) {
    ${props => props.theme.flex("column", "center", "center")}
    .mobileWrapper{
        ${props => props.theme.flex("column", "center", "space-around")}
        width: 90%;
        background-color: white;
        height: 370px;
    }
}
`


export const InputWrapper = Styled.div`
height: auto; 
margin: 40px 0 0px 0;
width: 125%;
${props => props.theme.flex("column", "flex-end", "center")}

@media only screen and (max-width: 600px) {
    margin: 0;
    width: 90%;
    height: auto; 
    ${props => props.theme.flex("column", "center", "center")}
}
`

export const CheckBoxWrapper = Styled.div`
${props => props.theme.flex("row", "center", "flex-start")}
width: 60%;
height: auto; 

@media only screen and (max-width: 600px) {
    height: 75px; 
    width: 90%;
    ${props => props.theme.flex("row", "center", "flex-start")}
    height: 70px;
    margin: 0px;
}
`

export const SocialIconsWrapper = Styled.div`
${props => props.theme.flex("row", "flex-end", "space-around")}

width: 40%;
height: auto;

@media only screen and (max-width: 600px) {
    ${props => props.theme.flex("row", "center", "space-around")}
    width: 70%;
    height: 80px;
}
`

export const HeaderWrapper = Styled.div`
${props => props.theme.flex("column", "center", "flex-start")}
width: 90%;
box-sizing: border-box;



@media only screen and (max-width: 600px) {
    ${props => props.theme.flex("column", "flex-start", "center")}
    width: 90%;
  
    p{
        margin: 0 0px 0px 7px;
        width: 100%;
    }

    h1{
        margin: 0 0px 10px 7px;
        width: 100%;
    }

    min-height: 140px;
}
`
