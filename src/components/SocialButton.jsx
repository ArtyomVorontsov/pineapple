import React from 'react'
import Styled from "styled-components";

const SocialButtonStyled = Styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;

    border: solid 2px ${props => props.theme.gray};
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: white;

    outline: none;



    img{
        opacity: 0.3;
        z-index: 10;
        user-select: none;
    }

    &:hover{ 
        box-shadow: 10px 5px 10px #e3e3e3;
        background-color: ${props => props.theme[props.color]};
        border: solid 2px ${props =>props.theme[props.color]};
        img{
            filter: invert(0.4) brightness(500%);
            opacity: 1;
        }
    }

    &:active{
       background-color: ${props => props.theme[props.color]};
       filter: brightness(85%);
    }
   
   
`

export const SocialButton = ({icon, color}) => {
    return (
        <SocialButtonStyled color={color}>
            <img draggable={false} src={icon} alt=""/>
        </SocialButtonStyled>
    )
}
