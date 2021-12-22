import { StyledSearchBoxButton, StyledSearchBoxContainer, StyledSearchBoxForm, StyledSearchBoxInput } from 'components/styles/div/SearchBox.styled';
import React from 'react'
import { useState } from 'react';


const CahSearchForm = () => {
    const [input, setInput] = useState("");
    const handleChange = e =>{
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setInput("");
        console.log(`Form was submited with input: ${input}`);
    };
    return (
        <StyledSearchBoxContainer>
            <StyledSearchBoxForm onSubmit={handleSubmit}>
                <StyledSearchBoxInput
                    onChange={handleChange}
                    value={input}
                    placeholder="Search ..."
                />
                <StyledSearchBoxButton onClick={handleSubmit}/>
            </StyledSearchBoxForm>
        </StyledSearchBoxContainer>

    )
}

export default CahSearchForm
