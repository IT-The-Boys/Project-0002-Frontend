import SignInBtn from 'components/buttons/SignInBtn'
import SignOutBtn from 'components/buttons/SignOutBtn'
import SignUpBtn from 'components/buttons/SignUpBtn'
import { StyledHeader } from 'components/styles/div/NavBar.styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    return (
        <StyledHeader>
            {isAuthenticated ? <SignOutBtn /> : <><SignInBtn /><SignUpBtn /></>}
            <div>Links</div>
            <Link to="lobby/cah">Game Lobby</Link>
            <Link to="wiki/cah">Game Wiki</Link>
        </StyledHeader>

    )
}

export default NavBar
