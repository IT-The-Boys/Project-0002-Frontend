
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import LobbyCard from 'components/layout/LobbyCard';
import { getLobbyList } from 'store/app/appSlice';


const GameSelectorView = () => {

    const { lobbyList, lobbyStatus } = useSelector((state) => state.app);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (path) => {
        navigate(path);
    }
    useEffect(() => {
        if (lobbyStatus === 'idle') dispatch(getLobbyList());
    }, [dispatch, lobbyStatus, lobbyList])


    return (
        <div>
            <h1>GameSelectorView</h1>
            {
                lobbyList?.map(lobby => <LobbyCard handleClick={handleClick} lobby={lobby} key={lobby.lobbyId} />)
            }
            
        </div>
    )
}

export default GameSelectorView
