import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { setMode, showPopup, togglePopup } from 'store/ui/modalSlice';
import { setToUrl } from 'store/auth/authSlice';
import { AUTH_MODE_SIGNIN } from 'utils/constants/config';

const SignInBtn = () => {
    const dispatch = useDispatch();
    const { authPopup, authMode } = useSelector(state => state.modal)
    const location = useLocation();
    const clickHandler = () => {
        dispatch(setToUrl(location.pathname))
        dispatch(setMode(["authMode", AUTH_MODE_SIGNIN]))
        authPopup && authMode === AUTH_MODE_SIGNIN ?
            dispatch(togglePopup("authPopup")) :
            dispatch(showPopup("authPopup"))
    }
    return (
        <div onClick={clickHandler}>
            Login
        </div>
    )
}

export default SignInBtn
