import React from 'react'
import { useSelector } from 'react-redux'

const CahSetForm = () => {
    const eL= useSelector(state=>state.cahWiki).expansionList;
    const setInfo = useSelector(state => state.cahWiki).setData.setInfo
    return (
        <div>
            <form>
                Set Name
                <input type="text" value={setInfo?.setName} />
                Set Expansion
                <select>
                    {eL?.map(e=> <option value={e.name} key={e.code} selected={setInfo?.setExpansion.name===e.name}>{e.name}</option>)}
                </select>
                Set Description
                <input type="text">{setInfo?.setDescription}</input>
            </form>
        </div>
    )
}

export default CahSetForm
