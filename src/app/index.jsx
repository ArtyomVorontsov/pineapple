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
import { Logo } from '../components/Logo.jsx';
import { NavBar } from '../components/NavBar.jsx';
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
    border: solid 1px black;
    display: flex; 
    flex-direction: column;
`


const SecondPart = Styled.div`
    flex: 1;
    height: auto;
    border: solid 1px black;
`

const Section = Styled.section`
    display: flex; 
    width: 100%;
    flex-direction: row;
    height: 153vh;
`

const NavBarWrapper = Styled.div`
    flex: 5;
    border: solid 1px black;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`



export const App = () => {
    return (
        <Router history={window.history}>


            <ThemeProvider theme={theme}>

                  <Section>
               
                    <FirstPart>
                        <NavBarWrapper >
                        <NavBar />
                        </NavBarWrapper>
                        <div style={{ flex: 10, border: "solid 1px black" }}>

                        </div>
                    </FirstPart>
                    <SecondPart>

                    </SecondPart>
                </Section>

                {/*  <SocialButton icon={facebookIcon} color="facebook" />
            <SocialButton icon={instagramIcon} color="instagram" />
            <SocialButton icon={youTubeIcon} color="youTube" />
            <SocialButton icon={twitterIcon} color="twitter" />

            <Input placeholder={"Type your email adress here..."} />
            <CheckBox />

            <Heading>
                Im heading
            </Heading>
            <Paragraph>
                Hello to all
            </Paragraph> */}
            </ThemeProvider>
        </Router>

    )
}

const container = document.getElementById("container");
ReactDOM.render(<App />, container);