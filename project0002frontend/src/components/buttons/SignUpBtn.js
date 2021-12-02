import React from 'react'
import { useDispatch } from 'react-redux'
import { showDialog } from '../../store/auth/authSlice'

const SignUpBtn = () => {
    const dispatch = useDispatch()
    return (
        <div onClick={()=>(dispatch(showDialog(true)))}>
            Register
        </div>
    )
}

export default SignUpBtn
