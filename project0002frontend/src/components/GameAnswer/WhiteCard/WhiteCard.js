import React, { Component } from 'react'
import './WhiteCard.css'

export default class WhiteCard extends Component {
    render() {
        const {cardText,users} = this.props
        return (
            <div>
                {/* {console.log(key)} */}

                {/* <div className="card" onClick={() => answerClick(users)}>
                    <span>{sentence}</span>
                </div> */}

                <div className="card" onClick={() => answerClick(users)}>
                    <span>{cardText}</span>
                </div>
            </div>

        )
    }
}

function answerClick(u){
    // console.log({u});
    // window.alert(u);
}
