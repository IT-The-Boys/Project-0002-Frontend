import RegistrationForm from 'components/forms/RegistrationForm'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchToLogin, switchToRegister } from 'store/auth/authSlice'
import SignInForm from '../forms/SignInForm'
import styled from 'styled-components'
import { togglePopup } from 'store/app/appSlice'



const AuthenticationPopup = () => {
    const {authPopup} = useSelector(state=> state.app)
    const { registerMode } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
      <>
      {authPopup?(
        <div>
          <button onClick={()=> dispatch(togglePopup("authPopup"))}> close</button>
            {/* <div>
                <button
                    onClick={() => dispatch(switchToRegister())}
                >
                    register
                </button>
                <button
                    onClick={() => dispatch(switchToLogin())}
                >
                    Login
                </button>
            </div> */}
            {/* {registerMode ? <RegistrationForm /> : <SignInForm />} */}
            <RegistrationForm />
            <SignInForm/>
        </div>
      ) : null}
      </>
    )
}




export default AuthenticationPopup
