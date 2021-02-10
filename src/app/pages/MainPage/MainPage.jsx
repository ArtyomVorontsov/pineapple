import React, { useState } from 'react'



import { Input } from "../../../components/Input.jsx"
import { CheckBox } from '../../../components/CheckBox.jsx';
import { SocialButton } from '../../../components/SocialButton.jsx';
import { Paragraph, LinkStyled, Heading } from '../../../components/Text.jsx';

import facebookIcon from "../../../icons/social/ic_facebook.svg";
import youTubeIcon from "../../../icons/social/ic_youtube.svg";
import instagramIcon from "../../../icons/social/ic_instagram.svg";
import twitterIcon from "../../../icons/social/ic_twitter.svg";

import pineappleImage from "../../../images/image_summer.png"
import successImage from "../../../icons/ui/success.svg"

import { NavBar } from '../../../components/NavBar.jsx';

import { Divider } from '../../../components/Divider.jsx';
import { formValidator } from '../../../utils/formValidator.js';
import { Section, FirstPagePart, NavBarWrapper, ContentWrapper, HeaderWrapper, InputWrapper, CheckBoxWrapper, SocialIconsWrapper, SecondPagePart } from './MainPageComponents.jsx';
import { API } from '../../../API/API.js';


export const MainPage = () => {

    const [passed, setPassed] = useState(false);

    const [inputValue, setInputValue] = useState("");
    const [isCheckBoxMarked, setIsCheckBoxMarked] = useState(false);
    const [error, setError] = useState(null);

    const sendValue = async () => {

        const newError = formValidator(inputValue, isCheckBoxMarked);
        setError(newError);
        if (newError) return

        API.addEmail(inputValue).then(()=>{
            setPassed(true);
        });
    }

    return (

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

    )
}
