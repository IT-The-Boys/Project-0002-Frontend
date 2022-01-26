import styled from "styled-components";

export const AuthFormGroup = styled.div`
  min-height: ${({row})=>112/(row)}px;
  display: flex;
  align-items: center;
`;
export const AuthFormLabel = styled.label`
    margin-left:auto;  
    padding: 1px;
    float:right;
`;
export const AuthFormInput = styled.input`
    margin-left:36px;
    margin-right: 36px;
    float: right;
`;

export const AuthFormSubmit = styled.button`
    float: right;
    margin-right:20px;
    
`;