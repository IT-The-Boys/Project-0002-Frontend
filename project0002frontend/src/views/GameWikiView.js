import React from 'react'
import { Outlet} from 'react-router';
import { Link } from 'react-router-dom';



const GameWikiView = () => {
    return (
        <div>
            <Link to="cah"> CAH </Link>
            <Outlet />
        </div>
    )
}

export default GameWikiView
