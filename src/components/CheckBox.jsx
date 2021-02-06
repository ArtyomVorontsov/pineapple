import React from 'react'
import checkMark from "../icons/ui/ic_checkMark.svg";
import Styled from "styled-components";

const CheckBoxStyled = Styled.div`
    width: 26px;
    height: 26px;
    border: solid 1px ${props => props.theme.gray};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        user-select: none;
    }

`

const CheckBoxWrapper = Styled.label`
    input:checked + div{
        background-color: ${ props => props.theme.blue};
        border: none;
    }

    input{
        display: none;
    }
`



export const CheckBox = ({onChange}) => {

    return (
        <CheckBoxWrapper>
            <input onChange={onChange} type="checkbox" />
            <CheckBoxStyled>
                <img draggable={false} src={checkMark} alt="" />
            </CheckBoxStyled>
        </CheckBoxWrapper>
    )
}
