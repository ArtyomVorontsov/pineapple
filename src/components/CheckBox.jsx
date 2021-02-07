import React from 'react'
import checkMark from "../icons/ui/ic_checkMark.svg";
import Styled from "styled-components";

const CheckBoxStyled = Styled.div`
    width: 26px;
    height: 26px;
    border: solid 1px ${props => props.theme.gray};
    border-radius: 4px;

    ${props => props.theme.flex("row", "center", "center")}

    img{
        user-select: none;
    }

`

const CheckBoxWrapper = Styled.label`
    input:checked + div{
        background-color: ${ props => props.theme.blue};
        border: solid 1px ${ props => props.theme.blue};
    }

    input{
        display: none;
    }
`



export const CheckBox = ({onChange, value}) => {

    return (
        <CheckBoxWrapper>
            <input value={value} onChange={onChange} type="checkbox" />
            <CheckBoxStyled>
                <img draggable={false} src={checkMark} alt="" />
            </CheckBoxStyled>
        </CheckBoxWrapper>
    )
}
