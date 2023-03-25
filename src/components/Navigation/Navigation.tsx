import * as React from 'react';
import { Link } from 'react-router-dom';
import './style/style.css'

interface NavigationProps{
    links : ILink[]
}

interface ILink{
    src: string
    title: string
}


function Navigation({links}:NavigationProps) {
    return ( 
        <div className="navigation">
            {links.map( elem => <Link to={elem.src}>{elem.title}</Link>)}
        </div>
     );
}

export default Navigation;