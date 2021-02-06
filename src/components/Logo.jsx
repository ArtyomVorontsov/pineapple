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
    width: 150px;

    .logoImage{
        margin-bottom: 15px;
        margin-right: 10px;
    }
`

export const Logo = () => {
    return (
        <LogoWrapper>
            <img className={"logoImage"} src={logoImage} alt="Logotype image" />
            <img src={logoText} alt="Logotype text" />
        </LogoWrapper>
    )
}
