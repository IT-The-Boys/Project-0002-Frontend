import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styled, { css } from "styled-components";

const UnSelectable=css`
  user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
  `

export const CahExpansionContainer = styled.div`
  width: 50%;
  height: 10vh;
  margin:auto;
`

export const CahExpansionHeader = styled.div`
  ${UnSelectable};
  cursor:pointer;
  height:10vh;
  margin: auto;
  width: 100%;
  padding: 0.4em 1em 0.4em 1em;
  border: 3px solid #fff;
  border-radius: 0 0 20px 20px;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  background: #17141d;
`
export const CahExpansionListContainer = styled.div`
/* box-sizing: border-box; */
width: 48%;
position: absolute;
z-index:1;
`

export const CahExpansionHeaderText= styled.span`
display: inline-block;
  vertical-align: middle;
  line-height: normal;
`

export const CahExpansionList = styled.ul`
  margin: auto;
  color: #fff;
  text-align:center;
  font-size: 1.3rem;
  font-weight: 500;
  list-style-type: none;
  
`

export const CahExpansionListItem = styled.li`
  margin-top:2px;
  list-style: none;
  background-color: #17141d;
  cursor:pointer;
  border: 3px solid #fff;
  border-radius: 10px;
  ${UnSelectable};
  `

export const StyledFaAngleDown = styled(FaAngleDown)`
  margin-top: 1%;
  float: right;
  ${UnSelectable};
  `

export const StyledFaAngleUp = styled(FaAngleUp)`
  margin-top: 1%;
  float: right;
  ${UnSelectable};
  `

