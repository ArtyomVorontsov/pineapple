import Styled from "styled-components";

export const Divider = Styled.div`
    width: ${props => props.width}%;
    border-bottom: solid 1px ${props => props.theme.gray} ;
    margin: 50px 0 50px 0;

    @media only screen and (max-width: 600px) {
        margin: 5px 0 5px 0;
        width: 90%;
    }
`