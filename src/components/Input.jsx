import React from 'react'
import Styled from "styled-components";
import arrowIcon from "../icons/ui/ic_arrow.svg"

export const StyledInput = Styled.input`
    flex: 10;
    height: 70px;
    padding: 0px;
    margin: 0px;
    border: none;
    box-sizing: border-box;
    padding-left: 50px;
    background-color: white;
    font-size: 15px;
    border: solid 2px ${props => props.theme.gray};
    border-right: none;
    border-left: none;
    outline: none;

`

export const StyledButton = Styled.button`
    flex: 2;
    height: 70px;
    border: none;
    background-color: white;
    border: solid 2px ${props => props.theme.gray};
    border-left: none;

    
`

export const InputWithButtonWrapper = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 663px;

    &:focus-within {
        box-shadow: 10px 5px 20px #e3e3e3;
    }

    *{
        fill: ${props => props.theme.gray};
    }

    &:hover {
        *{
            border-color: ${props => props.theme.blue};
            fill: ${props => props.theme.blue};
        }
        box-shadow: 10px 5px 20px #e3e3e3;
    }

`

const Line = Styled.div`
    height: 70px;
    width: 5px;
    background-color: ${props => props.theme.blue};
`


export const Input = ({ placeholder }) => {
    return (
        <InputWithButtonWrapper>
            <Line />
            <StyledInput placeholder={placeholder} />
            <StyledButton>
                <svg width="24" height="14" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
                </svg>
            </StyledButton>
        </InputWithButtonWrapper>

    )
}


