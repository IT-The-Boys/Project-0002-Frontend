import React, { useState } from 'react'
import './confirmHandPopup.css'

const ConfirmHandPopup = (props) => {
  console.log(props.comfirmHands)

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-Icon' onClick={props.handleClose}>X</span>

      </div>
    </div>
  )
}

export default ConfirmHandPopup
