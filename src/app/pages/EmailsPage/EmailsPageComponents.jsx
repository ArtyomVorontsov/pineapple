import Styled from "styled-components";

export const TdStyled = Styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  `

export const ThStyled = Styled.th`
    width: ${props => props.width};
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    cursor: pointer;
    color: ${props => props.isSelected ? "white" : "black"};
    background-color: ${props => props.isSelected ? "blue" : "white"};
  `

export const TableStyled = Styled.table`
    width: 100%;
  `

export const Paginator = Styled.div`
    ${props => props.theme.flex(props.direction, "center", "center")}
    flex-wrap: wrap;
    margin: 10px;
`
