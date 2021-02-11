import React from 'react'
import Styled from "styled-components";
import arrowIcon from "../icons/ui/ic_arrow.svg"
import { Paragraph } from './Text';

export const StyledInput = Styled.input`
    flex: 10;
    height: 70px;
    padding: 0px;
    margin: 0px;
    border: none;
    box-sizing: border-box;
    padding-left: 35px;
    background-color: white;
    font-size: 15px;
    border: solid 2px ${props => props.error ? "red" : props.theme.gray};
    border-right: none;
    border-left: none;
    outline: none;


    @media only screen and (max-width: 600px) {
        height: 60px;
        padding-left: 20px;
    }
`

export const StyledButton = Styled.button`
    flex: 2;
    height: 70px;
    background-color: white;
    border: solid 2px ${props => props.error ? "red" : props.theme.gray};
    border-left: none;   

    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`

export const InputWithButtonWrapper = Styled.div`
    z-index: 10;
    ${props => props.theme.flex("row", "center", "center")}
    width: 78%;

    &:focus-within {
        box-shadow: 10px 5px 20px #e3e3e3;
    }

    *{
        fill: ${props => props.theme.gray};
    }

    &:hover {
        *{
            border-color: ${props => props.error ? "#c20024" : props.theme.blue};
            fill: ${props => props.error ? "red" : props.theme.blue};
        }
        box-shadow: 10px 5px 20px #e3e3e3;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }

`

const Line = Styled.div`
    height: 70px;
    width: 5px;
    background-color: ${props => props.error ? "red" : props.theme.blue};

    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`

const ErrorMessageWrapper = Styled.div`
    width: 75%;
    height: 55px;
    ${props => props.theme.flex("row", "center", "flex-start")}


    @media only screen and (max-width: 600px) {
        height: auto;
        width: 100%;
    }
`


export const Input = ({ placeholder, value, onChange, onSubmit, error }) => {
    return (
        <>
            <InputWithButtonWrapper error={error}>
                <Line error={error} />
                <StyledInput error={error} onChange={onChange} value={value} placeholder={placeholder} />
                <StyledButton disabled={error} error={error}  onClick={onSubmit} >
                    <svg width="24" height="14" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
                    </svg>
                </StyledButton>
            </InputWithButtonWrapper>
            <ErrorMessageWrapper >
                {   error ? 
                    <Paragraph color={"red"} margin={"0px"}>{error}</Paragraph> : null
                }
            </ErrorMessageWrapper>

        </>
    )
}


