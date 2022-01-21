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
import PrivateRoute from './PrivateRoute';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GameSelectorView />} />
                {/* <Route path="/lobby/:lobbyId" element={<PrivateRoute />} > */}
                    <Route path="/lobby/:lobbyId" element={<GameLobbyView />} />
                {/* </Route> */}

                <Route path="/wiki/:gameId" element={<GameWikiView />} />
<<<<<<< HEAD
                <Route path="/game" element={<GameScreenView />} />
                {/* <Route
=======
                <Route path="/game/:serverId" element={<GameScreenView />} />
                <Route
>>>>>>> origin/View_Lobby
                    path=":pageName"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
