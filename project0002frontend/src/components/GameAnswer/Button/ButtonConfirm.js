import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <button className="button" onClick={ConfirmSelection}>Confirm Selection</button>
            </div>
        )
    }
}

function ConfirmSelection(){
    console.log('clicked');
    window.alert('clicked me');
}
