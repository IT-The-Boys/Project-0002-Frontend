import React from 'react'
import Chat from 'components/chat/Chat'
import Router from 'routes/Router'

const CaHView = () => {
    return (
        <div>
            <div>
                <Chat />
                <div className="content">
                    <Router/>
                </div>

            </div>

        </div>
    )
}

export default CaHView
