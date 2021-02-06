import React from 'react';
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Styled from "styled-components";
import { Input } from "../components/Input.jsx"
import { CheckBox } from '../components/CheckBox.jsx';
import { SocialButton } from '../components/SocialButton.jsx';
import { Paragraph, LinkStyled, Heading } from '../components/Text.jsx';

import facebookIcon from "../icons/social/ic_facebook.svg";
import youTubeIcon from "../icons/social/ic_youtube.svg";
import instagramIcon from "../icons/social/ic_instagram.svg";
import twitterIcon from "../icons/social/ic_twitter.svg";

import pineappleImage from "../images/image_summer.png"

import { NavBar, MobileNavBar } from '../components/NavBar.jsx';
import { BrowserRouter as Router, } from 'react-router-dom';

const theme = {
    blue: "#4066A5",
    black: "#131821",
    darkGray: "#6A707B",
    gray: "#E3E3E4",
    lightGray: "F2F5FA",

    facebook: "#4267B2",
    instagram: "#C13584",
    twitter: "#1DA1F2",
    youTube: "#FF0000",

    flex: (direction, align, justify) => `
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
    `
}


const FirstPart = Styled.div`
    flex: 0.9;
    height: auto;
    display: flex; 
    flex-direction: column;


    @media only screen and (max-width: 600px) {
        transform: translate(50%, 50%);
        position: absolute;
        background-color: white;
        width: 80%;
    }
`


const SecondPart = Styled.div`
    flex: 1;
    height: auto;
    background-image: url(${props => props.backgroundImage});

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const Section = Styled.section`
    display: flex; 
    width: 100%;
    flex-direction: row;
    height: 153vh;
   

    @media only screen and (max-width: 600px) {
        width: 100%;
        heigth: auto;
        ${props => props.theme.flex("column", "center", "center")}
        background-image: url(${props => props.backgroundImage});
    }
`

const NavBarWrapper = Styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const ContentWrapper = Styled.main`
    ${props => props.theme.flex("column", "center", "flex-start")}
    flex: 10;
    width: 100%;
    @media only screen and (max-width: 600px) {
        
    }
`


const InputWrapper = Styled.div`
    height: 150px; 
    width: 125%;
    ${props => props.theme.flex("row", "center", "flex-end")}

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`

const CheckBoxWrapper = Styled.div`
    ${props => props.theme.flex("row", "flex-start", "flex-start")}
    width: 60%;
    margin-top: 14px;
    height: 75px; 
    border-bottom: solid 1px ${props => props.theme.gray} ;
`

const SocialIconsWrapper = Styled.div`
    ${props => props.theme.flex("row", "flex-end", "space-around")}
    height: 100px;
    width: 40%;
`

const HeaderWrapper = Styled.div`
    ${props => props.theme.flex("column", "center", "flex-start")}
    width: 100%;
`

export const App = () => {
    return (
        <Router history={window.history}>
            <ThemeProvider theme={theme}>
                <Section  backgroundImage={pineappleImage}>
                    <MobileNavBar/>
                    <FirstPart>
                        <NavBarWrapper className={"navBarWrapper"} >
                            <NavBar />
                        </NavBarWrapper>
                        <ContentWrapper>
                            <HeaderWrapper >
                                <Heading textAlign="left" margin="10px" width="60%">
                                    Subscribe to newsletter
                                </Heading>
                                <Paragraph textAlign="left" margin="7px" width="60%">
                                    Subscribe to our newsletter and get 10%
                                    discound on pineapple glasses.
                                </Paragraph>
                            </HeaderWrapper>

                            <InputWrapper>
                                <Input placeholder={"Type your email adress here..."} />
                            </InputWrapper>

                            <CheckBoxWrapper>
                                <CheckBox />
                                <Paragraph style={{ margin: "0 0 0 15px" }}>
                                    I agree to <LinkStyled> terms of service </LinkStyled>
                                </Paragraph>
                            </CheckBoxWrapper>
                            <SocialIconsWrapper>
                                <SocialButton icon={facebookIcon} color="facebook" />
                                <SocialButton icon={instagramIcon} color="instagram" />
                                <SocialButton icon={youTubeIcon} color="youTube" />
                                <SocialButton icon={twitterIcon} color="twitter" />
                            </SocialIconsWrapper>
                        </ContentWrapper>
                    </FirstPart>
                    <SecondPart backgroundImage={pineappleImage}/>
                </Section>
            </ThemeProvider>
        </Router>

    )
}

const container = document.getElementById("container");
ReactDOM.render(<App />, container);