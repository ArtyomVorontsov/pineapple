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
}


const FirstPart = Styled.div`
    width: 45vw;
    height: 140vh;
    border: solid 1px black;
`

const Section = Styled.section`
    display: flex; 
    flex-direction: row;
`

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Section>
                <FirstPart>

                </FirstPart>
                <div>

                </div>
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
    )
}

const container = document.getElementById("container");
ReactDOM.render(<App />, container);