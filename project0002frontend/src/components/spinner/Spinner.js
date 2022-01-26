import { StyledSpinnerContainer } from 'components/styles/spinner/Spinner.styled'
import React from 'react'
import { DotLoader } from 'react-spinners'

const Spinner = () => {
    return (
        <StyledSpinnerContainer>
            <div>Loading...</div>
            <DotLoader color={"white"}/>
        </StyledSpinnerContainer>

    )
}

export default Spinner
