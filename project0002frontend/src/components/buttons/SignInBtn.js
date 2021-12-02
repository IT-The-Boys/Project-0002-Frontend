import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router';
import { setToUrl, showDialog } from '../../store/auth/authSlice';

const SignInBtn = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    return (
        <div onClick={
            () => {
                dispatch(setToUrl(location.pathname))
                dispatch(showDialog(false))
            }
        }>
            Login
        </div>
    )
}

export default SignInBtn
