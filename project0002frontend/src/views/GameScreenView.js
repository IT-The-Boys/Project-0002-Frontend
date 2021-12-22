
import AnswerSelectPopup from 'components/popup/AnswerSelectPopup';
import React, { useState }  from 'react'

const GameScreenView = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <h1>GameAnswerSelectionView</h1>
            <div>
                <AnswerSelectPopup />
                {/* <input type='button' value='Create Your Answer' onClick={togglePopup} />
                {isOpen && <AnswerSelectPopup
                    handleClose={togglePopup}
                />} */}
            </div>
            {/* <ServerList /> */}
        </div>
    )
}

export default GameScreenView
