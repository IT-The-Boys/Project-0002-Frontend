import RegistrationForm from 'components/forms/RegistrationForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignInForm from '../forms/SignInForm'
import { setMode, togglePopup } from 'store/ui/modalSlice'
import ReactDOM from 'react-dom'
import { AUTH_MODE_SIGNIN, AUTH_MODE_SIGNUP } from 'utils/constants/config';
import { StyledAuthPopup, StyledAuthPopupBG, StyledAuthPopupCloseBtn, StyledAuthPopupContent, StyledAuthPopupHeader, StyledAuthPopupTab, StyledAuthPopupTitle } from 'components/styles/div/AuthPopup.styled'
import { FaUser, FaUserPlus } from 'react-icons/fa'
import { useEffect } from 'react'


const AuthenticationPopup = () => {
  const { authPopup, authMode } = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const modeHandler = (mode) => {
    dispatch(setMode(["authMode", mode]))
  }
  const clickHandler = (e) => {
    if (e.target === e.currentTarget) dispatch(togglePopup("authPopup"));
  }
  useEffect(() => {
    const keyboardHandler = (e) => {
      switch (e.keyCode) {
        case 27:
          dispatch(togglePopup("authPopup"));
          break;
        case 37:
        case 39:
          authMode === AUTH_MODE_SIGNUP ?
            dispatch(setMode(["authMode", AUTH_MODE_SIGNIN])) :
            dispatch(setMode(["authMode", AUTH_MODE_SIGNUP]))
          break;
        default:
          return null;
      }
    }
    if (authPopup) window.addEventListener('keydown', keyboardHandler);
    return () => window.removeEventListener('keydown', keyboardHandler)
  }, [authMode, authPopup, dispatch])
  return ReactDOM.createPortal(
    <>{authPopup ?
      <StyledAuthPopupBG onClick={clickHandler}>
        <StyledAuthPopup>
          <StyledAuthPopupHeader>
            <StyledAuthPopupTab onClick={() => modeHandler(AUTH_MODE_SIGNIN)}><StyledAuthPopupTitle active={authMode === AUTH_MODE_SIGNIN}>Login</StyledAuthPopupTitle><FaUser /></StyledAuthPopupTab>
            <StyledAuthPopupTab onClick={() => modeHandler(AUTH_MODE_SIGNUP)}><StyledAuthPopupTitle active={authMode === AUTH_MODE_SIGNUP}>Register</StyledAuthPopupTitle><FaUserPlus /></StyledAuthPopupTab>
            <StyledAuthPopupCloseBtn onClick={() => dispatch(togglePopup("authPopup"))} />
          </StyledAuthPopupHeader>
          <StyledAuthPopupContent>
            {authMode === AUTH_MODE_SIGNUP ?
              <RegistrationForm /> : <SignInForm />
            }
          </StyledAuthPopupContent>
        </StyledAuthPopup>
      </StyledAuthPopupBG> : null}
    </>,
    document.getElementById("modal")

  )
}





export default AuthenticationPopup
