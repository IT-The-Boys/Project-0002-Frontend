import React, { Component } from 'react'
import black from './index.module.css'

export default class BlackCard extends Component {
    render() {
        const {blackcard} = this.props
        return (
            <div>
                <p className={black.outline}>The black card for this round is:</p>
                <div className={black.card}>
                    {/* <p>You say tomato, I say _____.</p> */}
                    <p>{blackcard}</p>
                    <br /><br /><br /><br />
                    <p id="foot">Prent your are Xyxyy</p>
                </div>
            </div>
        )
    }
}
