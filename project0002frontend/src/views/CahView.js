

import React from 'react'
import Chat from 'components/chat/Chat'

import BaseModal from 'components/modals/BaseModal'
import { useSelector } from 'react-redux'
import { getFilteredServerList } from '../store/lobby/lobbySlice'
import Router from 'routes/Router'

const CaHView = () => {
    const lobby = useSelector(getFilteredServerList)
    return (
        <div>
            {console.log(lobby)}
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

export default CaHView
