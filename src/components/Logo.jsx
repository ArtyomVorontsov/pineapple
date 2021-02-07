import React from 'react';
import logoText from "../icons/logo/pineapple.svg";
import logoImage from "../icons/logo/Union.svg";
import Styled from "styled-components";

const LogoWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 70px;
    margin: 0;

    .logoImage{
        margin-bottom: 15px;
        margin-right: 13px;
    }

    @media only screen and (max-width: 600px) {

        .logoImage{
            margin: 0 0 5px 6px;
        }

        .logoText{
            display: none;
        }
        width: 50px;
    }
`

export const Logo = () => {
    return (
       
        <LogoWrapper>
            <img className={"logoImage"} src={logoImage} alt="Logotype image" />
            <img className={"logoText"} src={logoText} alt="Logotype text" />
        </LogoWrapper>
    )
}


export const LogoMobile = () => {
    return (
       
        <LogoWrapper>
            <img className={"logoImage"} src={logoImage} alt="Logotype image" />
        </LogoWrapper>
    )
}

