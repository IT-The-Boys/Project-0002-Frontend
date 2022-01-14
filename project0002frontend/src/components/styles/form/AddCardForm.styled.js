import styled from "styled-components";

export const StyledInputContainer = styled.div`
display:flex;
width:50%;
max-width:300px;
justify-content: top;
align-items:center;
flex-direction:column;
`

export const StyledPreviewContainer = styled.div`
-moz-transition: all 1s ease-out;
-o-transition: all 1s ease-out;
-webkit-transition: all 1s ease-out;
transition: all 1s ease-out;
background-color:${({ cardType }) => cardType === "QUESTION" ? "white" : "black"};
display:flex;
width:50%;
border: 2px solid white;
border-radius:20px;
justify-content: center;
align-items:center;
flex-direction:column;
`

export const StyledFormContainer = styled.div`
min-height: 400px;
min-width: 600px;
max-height: 400px;
max-width: 600px;
display:flex;
flex-direction:row;
`

export const StyledFormHeader = styled.h1`
margin:auto;
margin-bottom:10px;
height: 40px;
text-align: center;
`
export const StyledFieldGroup = styled.div`
display:flex;
flex-direction:column;
-moz-transition: all 1s ease-out;
-o-transition: all 1s ease-out;
-webkit-transition: all 1s ease-out;
transition: all 1s ease-out;
width: 100%;
height: ${({ row }) => 500 / row}px;
`
export const StyledFooter = styled.div`
float: end;
display:flex;
flex-direction:column;
width: 100%;
height:100px;
`
export const StyledFieldLabel = styled.label`
margin-bottom:10px;
`
export const StyledBtn = styled.button`
visibility: ${({ visible }) => visible ? "visible" : "hidden"};
margin-top: 5px;
-moz-transition: visibility 1s linear;
-o-transition: visibility 1s linear;
-webkit-transition: visibility 1s linear;
transition: visibility 1s linear;
`

export const StyledSwitch = styled.div`
  height: 30px;
  width: 100px;
  background: ${({ color }) => color};
  cursor: pointer;
  -moz-transform: skew(${({ color }) => color === "white" ? "-" : "+"}30deg);
  -ms-transform: skew(${({ color }) => color === "white" ? "-" : "+"}30deg);
  -webkit-transform: skew(${({ color }) => color === "white" ? "-" : "+"}30deg);
  transform: skew(${({ color }) => color === "white" ? "-" : "+"}30deg);
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin: auto;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  -webkit-transition: all 1s ease-out;
  transition: all 1s ease-out;
  text-indent: ${({ color }) => color === "white" ? "45" : "10"}%;
  line-height: 30px;
  -moz-box-shadow: 0px 0.5px 2.5px #6f6f6f;
  -webkit-box-shadow: 0px 0.5px 2.5px #6f6f6f;
  box-shadow: 0px 0.5px 2.5px #6f6f6f;
  &:before{
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    -webkit-transition: all 1s ease-out;
    transition: all 1s ease-out;
    position: absolute;
    content: "";
    height: 28px;
    width: 25px;
    top: 1px;
    left: ${({ color }) => color === "white" ? "1" : "74"}px;
    cursor: pointer;
    background: ${({ color }) => color === "white" ? "black" : "white"};
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-box-shadow: 2.5px 0 5px #6f6f6f;
    -webkit-box-shadow: 2.5px 0 5px #6f6f6f;
    box-shadow: 2.5px 0 5px #6f6f6f;
  }
`
export const StyledSwitchSpan = styled.div`
color:${({ color }) => color};

`