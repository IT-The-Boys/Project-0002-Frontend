
import AuthenticationPopup from 'components/popup/AuthenticationPopup';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import LobbyCard from '../components/layout/LobbyCard';
import { getLobbyList } from '../store/app/appSlice';

const GameSelectorView = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const { lobbyList, status, error } = useSelector((state) => state.app);
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const handleClick=(id)=>{
       if (isAuthenticated) {
           console.log("go to lobby")
       } else {
           setOpen(true);
       }

    }
    const toggleHandler=()=>{
        setOpen(!open);
     }
    useEffect(() => {
        if (status === 'idle') dispatch(getLobbyList());
    }, [dispatch, status, lobbyList])
    return (
        <div>
            <h1>GameSelectorView</h1>
            {
                lobbyList.map(lobby=> <LobbyCard onClick={()=>handleClick(lobby.lobbyId)} lobby={lobby} key={lobby.lobbyId}/>)
            }
            {open && <AuthenticationPopup toggle={toggleHandler}/>}
        </div>
    )
}

export default GameSelectorView
