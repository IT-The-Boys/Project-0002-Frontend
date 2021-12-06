import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from 'store/wiki/cahSlice';
import { checkQuestion } from 'utils/CahCameUtils';
import { deleteAttributesWithValue } from 'utils/ObjectUtils';


const ValidatedInput = (props) => {
    const { label, errorMessage, onChange, tag, ...inputProps } = props;

    return (
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

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
    const formFields = [
        {
            id: "cardText",
            tag: <input />,
            type: "text",
            placeholder: "Enter Card text",
            errorMessage:
                "Please enter card text",
            label: "cardText",
            required: true,
        },

    ]
    const [hasActions, setHasActions] = useState(false)
    const [edited, setEdited] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        let cleanedData = deleteAttributesWithValue(formData, [null, undefined], true)
        //ToDo add form validation
        if (formData.cardType === "QUESTION")
            switch (checkQuestion(formData.cardText)) {
                case 0: console.log("error"); break;
                case 1: {
                    console.log("as planned");
                    dispatch(addCard(cleanedData))
                    toggleHandler();
                    break;
                }
                default: console.log("need to check card actions")
            }
        else {
            dispatch(addCard(cleanedData))
            toggleHandler();
        }
        

    }
    const changeHandler = (e) => {
        const { id, value } = e.target;
        const parent = e.target.parentNode.id;
        if (parent) {
            setFormData(prevState => ({
                ...prevState,
                [parent]: { ...prevState[parent], [id]: value }
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
            <h1>Add card</h1>
            card type
            <select
                id="cardType"
                value={formData.cardType}
                onChange={changeHandler}>
                <option value="ANSWER">white</option>
                <option value="QUESTION">black</option>
            </select>
            {formData.cardType === "QUESTION" && <div>has actions <input type="checkbox" onChange={() => setHasActions(!hasActions)} /></div>}
            {hasActions &&
                <div id="cardActions"> Actions
                    Pick <input type="text" placeholder="" id="pick"
                        value={formData.cardActions.pick ? formData.cardActions.pick : ""}
                        onChange={changeHandler} />
                    Draw <input type="text" placeholder="" id="draw"
                        value={formData.cardActions.draw ? formData.cardActions.draw : ""}
                        onChange={changeHandler} />
                </div>}
            <br />

            {formFields.map((field) => (
                <ValidatedInput
                    key={field.id}
                    {...field}
                    value={formData[field.id]}
                    onChange={changeHandler}
                />
            ))}

            <button type="submit" disabled={formData.cardText ? false : true}>add</button>
            {edited && <button onClick={() => {
                setFormData(defaultForm)
                setHasActions(false)
                setEdited(false)
            }}>reset</button>}

            <button onClick={toggleHandler}>close</button>
        </form>
    )
}

export default CahCardForm
