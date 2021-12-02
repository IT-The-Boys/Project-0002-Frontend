import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const CahExpansions = () => {
    const { expansionList } = useSelector((state) => state.cahWiki);
    return (

        <div> 
            {expansionList.map(exp => <Link to={exp.name.toLowerCase()} key={exp.code}>{exp.name}</Link>)}
            <button>Add</button>
        </div>

    )
}

export default CahExpansions
