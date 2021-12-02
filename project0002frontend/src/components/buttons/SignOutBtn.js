import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../../store/auth/authSlice'

const SignOutBtn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div onClick={()=>{
            navigate("/")
            dispatch(logout())
            }}>
        Logout
    </div>
    )
}

export default SignOutBtn
