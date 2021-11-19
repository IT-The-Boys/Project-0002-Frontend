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

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GameSelectorView />} />
                <Route path="/lobby/:lobbyId" element={<GameLobbyView />} />
                <Route path="/wiki/:gameId" element={<GameWikiView />} />
                <Route path="/game" element={<GameScreenView />} />
                <Route
                    path="*"
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
