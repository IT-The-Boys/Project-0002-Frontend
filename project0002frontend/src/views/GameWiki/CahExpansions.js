import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const CahExpansions = () => {
    const { expansionList } = useSelector((state) => state.cahWiki);
    return (

        <div> 
            {expansionList.map(exp => <div  key={exp.code}><Link to={exp.name.toLowerCase()}>{exp.name}</Link><br/></div>)}
            <button>Add</button>
        </div>

    )
}

export default CahExpansions
