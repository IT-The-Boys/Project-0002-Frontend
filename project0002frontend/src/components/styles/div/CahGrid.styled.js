import styled from "styled-components"
export const StyledGridBG= styled.div`
    width: 98%;
    height: 70%;
    display: inline-flex;
    padding:1%;
    border-radius: 10px ;
    background-color: #17141d;
    margin:1%;
`

export const StyledGrid = styled.div`
    width:100%;
    height:100%;
    float:left;
    grid-gap: 20px; 
    overflow-y:auto;
    &::-webkit-scrollbar{
        display: none;
    }
`
export const StyledGridCard = styled.div`
    padding:5px;
    float:left;
    max-width: 25%;
`
