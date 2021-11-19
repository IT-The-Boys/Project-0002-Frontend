import LoginForm from 'components/forms/LoginForm'
import RegistrationForm from 'components/forms/RegistrationForm'
import React, { useState } from 'react'

const AuthenticationPopup = ({toggle}) => {
    const [signup, setSignup] = useState(false)
    return (
        <div>
            <div>
            <button
                    onClick={()=>setSignup(true)}
                >
                    register
                </button>
                <button
                    onClick={()=>setSignup(false)}
                >
                    Login
                </button>
            </div>
            {!signup && <LoginForm toggle={toggle}/>}
            {signup && <RegistrationForm/>}
        </div>
    )
}




export default AuthenticationPopup
