import { EditSelectAreaDiv } from 'components/div/EditSelectAreaDiv';
import { EditTextAreaDiv } from 'components/div/EditTextAreaDiv';
import { EditTextDiv } from 'components/div/EditTextDiv';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fillObjectWith } from 'utils/ObjectUtils';


const CahSetInfoView = () => {
    const info = useSelector((state) => state.cahWiki).setData?.setInfo;
    const [editMode, setEditMode] = useState({})
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({})
    const [modified, setModified] = useState(false)
    const { expansionList } = useSelector((state) => state.cahWiki);
    const { user } = useSelector((state) => state.auth);
    const hasPermission = user && user.userRoles.includes(info?.setExpansion.writePermission);
    const handleSave = () => {
        console.log(formData)
    }

    const handleChange = (e) => {
        console.log(e.target.id, e.target.value)
        const { id, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }))
        setModified(true)
    }
    const toggleHandler = () => {
        setOpen(!open)
    }   

    const handleReset = () => {
        if (info) {
            setFormData(fillObjectWith(info))
            setModified(false)
        }
    }

    useEffect(() => {
        if (info) {
            setEditMode(fillObjectWith(info, false))
            setFormData(fillObjectWith(info, "", ["id"]))
        }
    }
        , [info])
    if (info) {
        return (
            <div>
                Set info <button onClick={toggleHandler}>Show</button>
                {open && <div>
                    <EditTextDiv
                        title="Name"
                        mode={editMode.setName}
                        value={formData.setName ? formData.setName : info.setName}
                        hasPermission={hasPermission}
                        onChange={handleChange}
                        id="setName" />
                    <EditSelectAreaDiv
                        title="Expansion"
                        mode={editMode.setExpansion}
                        value={formData.setExpansion ? formData.setExpansion : info.setExpansion.name}
                        valueList={expansionList}
                        hasPermission={hasPermission}
                        onChange={handleChange}
                        id="setDescription" />
                    <EditTextAreaDiv
                        title="Description"
                        mode={editMode.setDescription}
                        value={formData.setDescription ? formData.setDescription : info.setDescription}
                        hasPermission={hasPermission}
                        onChange={handleChange}
                        id="setDescription" />
                    {modified && <div>
                        <button onClick={handleReset}>Reset</button>
                        <button onClick={handleSave}>Save changes</button>
                    </div>
                    }

                </div>}
            </div>
        )
    } else return <></>
}

export default CahSetInfoView
