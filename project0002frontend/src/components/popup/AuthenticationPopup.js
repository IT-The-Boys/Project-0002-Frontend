import RegistrationForm from 'components/forms/RegistrationForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignInForm from '../forms/SignInForm'
import { togglePopup } from 'store/ui/modalSlice'



const AuthenticationPopup = () => {
    const {authPopup} = useSelector(state=> state.modal)
    const dispatch = useDispatch()
    return (
      <>
      {authPopup?(
        
        <div>
          <button onClick={()=> dispatch(togglePopup("authPopup"))}> close</button>
            <RegistrationForm />
            <SignInForm/>
        </div>
      ) : null}
      </>
    )
}




export default AuthenticationPopup
