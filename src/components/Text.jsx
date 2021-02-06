import Styled from "styled-components";

export const Heading = Styled.h1`
    font-family: Georgia;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    @media only screen and (max-width: 600px) {
        font-family: Georgia;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
    }

`

export const Paragraph = Styled.p`
    color: #6A707B;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    @media only screen and (max-width: 600px) {
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
    }
`

export const LinkStyled = Styled.a`
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    &hover: {
        color: #4066A5;
    }

    &active{
        color: #233759;
    }

`