import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const CahCardForm = ({ toggleHandler }) => {
    const dispatch = useDispatch();
    const defaultForm = {
        cardType: "ANSWER",
        cardText: "",
        cardActions: {
            "pick": null,
            "draw": null
        }
    }
    const [formData, setFormData] = useState(defaultForm
    )
    const [hasActions, setHasActions] = useState(false)
    const [edited, setEdited] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    const changeHandler = (e) => {
        const { id, value } = e.target;
        const parent=e.target.parentNode.id;
        console.log(id, " with", value)
        if (parent) {
            console.log("parent", parent)

            setFormData(prevState => ({
                ...prevState,
                [parent]: {...prevState[parent], [id]:value}
            }))
        } else {
            setFormData(prevState => ({
                ...prevState,
                [id]: value
            }))
        }
        setEdited(true)
    }

    return (
        <form onSubmit={submitHandler}>
            card form
            <input type="text"
                id="cardText"
                placeholder="Enter card text"
                onChange={changeHandler}
                value={formData.cardText} />
            <br />
            card type
            <select
                id="cardType"
                value={formData.cardType}
                onChange={changeHandler}>
                <option value="ANSWER">white</option>
                <option value="QUESTION">black</option>
            </select>
            {formData.cardType==="QUESTION" && <div>has actions <input type="checkbox" onChange={() => setHasActions(!hasActions)} /></div>}
            {hasActions &&
                <div id="cardActions"> Actions
                    Pick <input type="text" placeholder="" id="pick"
                    value={formData.cardActions.pick?formData.cardActions.pick:""} 
                    onChange={changeHandler}/>
                    Draw <input type="text" placeholder="" id="draw"
                    value={formData.cardActions.draw?formData.cardActions.draw:""}
                    onChange={changeHandler}/>
                </div>}
            <br />
            
            <button type="submit" disabled={formData.cardText ? false : true}>add</button>
            {edited && <button onClick={() => {
                console.log("clear form")
                setFormData(defaultForm)
                setHasActions(false)
                setEdited(false)
            }}>reset</button>}
            
            <button onClick={toggleHandler}>close</button>
        </form>
    )
}

export default CahCardForm
