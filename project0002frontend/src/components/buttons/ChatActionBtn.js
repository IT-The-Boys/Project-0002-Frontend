import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMode, showPopup } from 'store/ui/modalSlice';
import { CHAT_MODE_FULL } from 'utils/constants/config';

const ChatActionBtn = () => {
    const { isAuthenticated, } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const clickHandler = () => {
        (isAuthenticated) ? 
        dispatch(setMode(["chatMode",CHAT_MODE_FULL])) :
        dispatch(showPopup("authPopup"))
    }
    return (
        <div>
            <button onClick={clickHandler}> show chat</button>
        </div>
    )
}

ChatActionBtn.defaultProps={
    isDraggable: false,
}

export default ChatActionBtn
