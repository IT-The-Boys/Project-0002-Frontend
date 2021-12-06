import Chat from 'components/chat/Chat';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import GameLobbyView from 'views/GameLobbyView'
import GameScreenView from 'views/GameScreenView'
import GameSelectorView from 'views/GameSelectorView';
import GameWikiView from 'views/GameWikiView';
import SignInBtn from '../components/buttons/SignInBtn';
import SignOutBtn from '../components/buttons/SignOutBtn';
import SignUpBtn from '../components/buttons/SignUpBtn';
import AuthenticationPopup from '../components/popup/AuthenticationPopup';
import CahSetList from '../views/GameWiki/CahSetList';
import CahSetView from '../views/GameWiki/CahSetView';
import CahWiki from '../views/GameWiki/CahWiki';
import PrivateRoute from './PrivateRoute';

const AppController = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    const [chatOpen, setChatOpen] = useState(false)
    return (
        <div>Navbar
            {isAuthenticated ? <SignOutBtn /> : <><SignInBtn /><SignUpBtn /></>}
            <div>Links</div>
            <Link to="lobby/cah">Game Lobby</Link>
            <Link to="wiki/cah">Game Wiki</Link>
            <button onClick={() => setChatOpen(!chatOpen)}>Chat</button>

            {chatOpen && <Chat />}
        </div>

    )
}

const Router = () => {
    return (
        <BrowserRouter>
            <AuthenticationPopup />
            <AppController />
            <Routes>
                <Route path="/" element={<GameSelectorView />} />

                <Route path="/lobby/:lobbyId" element={<PrivateRoute />} >
                    <Route path="/lobby/:lobbyId" element={<GameLobbyView />} />
                </Route>
                <Route path="/wiki" element={<GameWikiView />}>
                    <Route path="cah" element={<CahWiki />}>
                        <Route path=":expansion" element={<CahSetList />}>
                            <Route path=":setId" element={<CahSetView />} />
                        </Route>
                        {/* <Route path=":expansion/:setId/edit" element={<CahSetEditView/>} /> */}
                    </Route>
                </Route>
                <Route path="/game/:serverId" element={<GameScreenView />} />
                <Route
                    path=":pageName"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
