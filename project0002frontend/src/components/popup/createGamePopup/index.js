import React from 'react'
import './index.css'

const index = props => {
    return (
        <div className='popup-box'>
            <div className='box'>
                <span className='close-Icon' onClick={props.handleClose}>X</span>
                <>
                <h2>Create Your Game</h2>
                <p>Insert settings checkbox here...</p>
                <button>Create Game(Dummy)</button>
                </>
            </div>
        </div>
    )
}

export default index
