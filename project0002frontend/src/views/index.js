import React from 'react'
import './index.css'

const index = props => {
    return (
        <div className='popup-box'>
            <div className='box'>
                <span className='close-Icon' onClick={props.handleClose}>X</span>
                {props.content}
            </div>
        </div>
    )
}

export default index
