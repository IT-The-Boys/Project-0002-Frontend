

import React from 'react'
import Chat from 'components/chat/Chat'
import Router from 'routes/Router'
const index = () => {
    
    return (
        <div>
            <div>
                <Chat />
                {/* {open && <AuthenticationPopup toggle={toggleHandler}/>} */}
                <div className="content">
                    <Router/>
                </div>

            </div>

        </div>
    )
}

export default index
