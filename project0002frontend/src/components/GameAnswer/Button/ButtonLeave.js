import React, { Component } from 'react'
import './index.css'

export default class ButtonLeave extends Component {
    render() {
        return (
            <div>
                <button className="button" onClick={LeaveRoom}>LeaveRoom</button>
            </div>
        )
    }
}

function LeaveRoom(){
    console.log('clicked');
    window.alert('leaved');
}
