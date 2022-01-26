import { FaSearch } from "react-icons/fa";
import styled from "styled-components";


export const StyledSearchBoxInput = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  min-width: 8vh;
  padding-left: 1rem;
  border: none;
  color: white;;
 display:none;
 transition: 0.4s ease-out;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;


export const StyledSearchBoxContainer = styled.div`
    margin-top:10px;
    min-height:10vh;
    position: absolute;
    left:95%;
    float:right;
    align-items: center;
    height:100%;
    justify-content: center;
    height:10vh;
    background-color: #100e17;
    max-width:10vh;
    &:hover{
        max-width: 200px;
        /* border:3px solid white;
        border-radius: 10px; */
        z-index: 1;
    transform: translateX(-20vh);
    transition: 0.4s ease-out;
    }
    &:hover ${StyledSearchBoxInput} {
    display: flex;
    
  }
`;

export const StyledSearchBoxForm = styled.form`
position: relative;
margin-left:10px;
margin-right:10px;
margin-top: 2vh;
display: flex;
align-items: center;
justify-content: center;
box-shadow: -1rem 0 3rem #000;
background-color: #17141d;
/* Change width of the form depending if the bar is opened or not */
min-width: 7vh;
height: 5vh;
border-radius: 10px;
`;


export const StyledSearchBoxButton = styled(FaSearch)`
    cursor: pointer;
    margin-right: 1rem;
    color: white;
`;