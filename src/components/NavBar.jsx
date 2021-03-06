import React from 'react'
import Styled from "styled-components";
import { Logo } from './Logo';
import { NavLink } from 'react-router-dom';
import { Paragraph } from './Text';

const NavBarUL = Styled.ul`
    ${props => props.theme.flex("row", "center", "center")}
    flex: 1;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 50%;
`

const NavBarLI = Styled.li`
   a{
    text-decoration: none;
   } 
   padding: 15px;

   @media only screen and (max-width: 600px) {
        padding: 10px;
   }
`
const NavStyled = Styled.div`
    ${props => props.theme.flex("row", "center", "center")}
    height: 70%;
    width: 100%;

    @media only screen and (max-width: 600px) {
        
        ${props => props.theme.flex("row", "center", "center")}
        height: 100%;
        width: 100%;
        z-index: 20;
        background-color: white;
    }
`



const LogoWrapper = Styled.div`
    ${props => props.theme.flex("row", "center", "flex-end")}
    flex: 0.5;

    @media only screen and (max-width: 600px) {
        ${props => props.theme.flex("row", "center", "flex-start")}
    }
` 


export const NavBar = () => {
    return (
        <NavStyled>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>

            <NavBarUL>
                <NavBarLI>
                    <NavLink to="#">
                        <Paragraph>
                            About
                        </Paragraph>

                    </NavLink>
                </NavBarLI>
                <NavBarLI>
                    <NavLink to="#">
                        <Paragraph>
                            How it works
                    </Paragraph>

                    </NavLink>
                </NavBarLI>
                <NavBarLI>
                    <NavLink to="#">
                        <Paragraph>
                            Contact
                        </Paragraph>
                    </NavLink>
                </NavBarLI>
            </NavBarUL>
        </NavStyled>
    )
}
