import React, { useState } from 'react';
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
import successImage from "../icons/ui/success.svg"

import { NavBar } from '../components/NavBar.jsx';
import { BrowserRouter as Router, } from 'react-router-dom';
import { theme } from "../theme.js";
import { Divider } from '../components/Divider.jsx';
import { formValidator } from '../utils/formValidator.js';




const FirstPagePart = Styled.div`
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

const SecondPagePart = Styled.div`
    flex: 1;
    height: auto;
    background-image: url(${props => props.backgroundImage});

    @media only screen and (max-width: 600px) {
        flex: 0;
        display: none;
    }
`

const Section = Styled.section`
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

const NavBarWrapper = Styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media only screen and (max-width: 600px) {
        flex: 1;
    }
`

const ContentWrapper = Styled.div`
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


const InputWrapper = Styled.div`
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

const CheckBoxWrapper = Styled.div`
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

const SocialIconsWrapper = Styled.div`
    ${props => props.theme.flex("row", "flex-end", "space-around")}
  
    width: 40%;
    height: auto;

    @media only screen and (max-width: 600px) {
        ${props => props.theme.flex("row", "center", "space-around")}
        width: 70%;
        height: 80px;
    }
`

const HeaderWrapper = Styled.div`
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


export const App = () => {

    const [passed, setPassed] = useState(false);

    const [inputValue, setInputValue] = useState("");
    const [isCheckBoxMarked, setIsCheckBoxMarked] = useState(false);
    const [error, setError] = useState(null);

    const sendValue = () => {

        const newError = formValidator(inputValue, isCheckBoxMarked);
        setError(newError);
        if (newError) return

        console.log("email sended!");
        setPassed(true);

    }


    return (
        <Router history={window.history}>
            <ThemeProvider theme={theme}>
                <Section backgroundImage={pineappleImage}>
                    <FirstPagePart>
                        <NavBarWrapper className={"navBarWrapper"} >
                            <NavBar />
                        </NavBarWrapper>

                        <ContentWrapper>
                            <div className={"mobileWrapper"}>
                                <HeaderWrapper>
                                    {passed ?
                                        <>
                                            <div style={{ display: "block", width: "60%", margin: "20px 0 20px 0" }}>
                                                <img style={{ display: "block" }} src={successImage} alt="" />
                                            </div>

                                            <Heading textAlign="left" margin="10px" width="60%">
                                                Thanks for subscribing!
                                            </Heading>
                                            <Paragraph textAlign="left" margin="7px" width="60%">
                                                You have successfully subscribed to our email listing. Check your email for the discount code.
                                            </Paragraph>

                                        </>
                                        :
                                        <>
                                            <Heading textAlign="left" margin="10px" width="60%">
                                                Subscribe to newsletter
                                            </Heading>
                                            <Paragraph textAlign="left" margin="7px" width="60%">
                                                Subscribe to our newsletter and get 10%
                                                discound on pineapple glasses.
                                            </Paragraph>
                                        </>}
                                </HeaderWrapper>

                                {passed ? null :
                                    <>
                                        <InputWrapper>
                                            <Input error={error} onSubmit={sendValue} onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder={"Type your email adress here..."} />
                                        </InputWrapper>


                                        <CheckBoxWrapper>
                                            <CheckBox value={isCheckBoxMarked} onChange={() => setIsCheckBoxMarked(isCheckBoxMarked ? false : true)} />
                                            <Paragraph style={{ margin: "0 0 0 15px" }}>
                                                I agree to <LinkStyled> terms of service </LinkStyled>
                                            </Paragraph>
                                        </CheckBoxWrapper>
                                    </>}

                                <Divider width={60} />

                                <SocialIconsWrapper>
                                    <SocialButton icon={facebookIcon} color="facebook" />
                                    <SocialButton icon={instagramIcon} color="instagram" />
                                    <SocialButton icon={youTubeIcon} color="youTube" />
                                    <SocialButton icon={twitterIcon} color="twitter" />
                                </SocialIconsWrapper>
                            </div>
                        </ContentWrapper>
                    </FirstPagePart>
                    <SecondPagePart backgroundImage={pineappleImage} />
                </Section>
            </ThemeProvider>
        </Router>

    )
}

const container = document.getElementById("container");
ReactDOM.render(<App />, container);