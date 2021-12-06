import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, showPopup, togglePopup } from 'store/app/appSlice'
import { AUTH_MODE_SIGNUP } from 'utils/constants/config'

const SignUpBtn = () => {
    const { authPopup, authMode } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(setMode(["authMode", AUTH_MODE_SIGNUP]))
        authPopup && authMode===AUTH_MODE_SIGNUP?
            dispatch(togglePopup("authPopup")) :
            dispatch(showPopup("authPopup"))
    }
    return (
        <div onClick={clickHandler}>
            Register
        </div>
    )
}

export default SignUpBtn
