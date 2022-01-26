import NavBar from 'components/nav/NavBar';
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import GameLobbyView from 'views/GameLobbyView'
import GameScreenView from 'views/GameScreenView'
import GameSelectorView from 'views/GameSelectorView';
import GameWikiView from 'views/GameWikiView';
import AuthenticationPopup from '../components/popup/AuthenticationPopup';
import CahSetList from '../views/GameWiki/CahSetList';
import CahSetView from '../views/GameWiki/CahSetView';
import CahWiki from '../views/GameWiki/CahWiki';
import PrivateRoute from './PrivateRoute';



const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <AuthenticationPopup />
            {/* <Chat /> */}
            <Routes>
                <Route path="/" element={<GameSelectorView />} />

                <Route path="/lobby/:lobbyId" element={<PrivateRoute />} >
                    <Route path="/lobby/:lobbyId" element={<GameLobbyView />} />
                </Route>
                <Route path="/wiki" element={<GameWikiView />}>
                    <Route path="cah" element={<CahWiki />}>
                        <Route path=":expansion" element={<CahSetList />}>
                            <Route path=":setId" element={<CahSetView />} />
                            {/* <Route path=":expansion/:setId/edit" element={<CahSetEditView/>} /> */}
                        </Route>
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
