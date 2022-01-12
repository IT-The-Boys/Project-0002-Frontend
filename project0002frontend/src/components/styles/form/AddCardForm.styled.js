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
background-color:${({ cardType }) => cardType === "QUESTION" ? "white" : "black"};
display:flex;
width:50%;
border: 2px solid white;
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
height: 40px;
text-align: center;
`
export const StyledFieldGroup = styled.div`
display:flex;
flex-direction:column;
width: 100%;
height: ${({row})=>500/row}px;
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
visibility: ${({visible})=>visible?"visible":"hidden"};
margin-top: 5px;
`
export const StyledSwitch = styled.div`
`
export const StyledSwitchSpan = styled.div`
`