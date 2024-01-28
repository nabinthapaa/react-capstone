import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLinks } from '../constants/NavLinks';

function Nav() {
    const location = useLocation();
    return (
        <nav>
            <ul className='navlist'>
                {NavLinks.map((link) => <li key={link.name} className={`${location.pathname === link.link ? 'active' : ""}`}><Link to={link.link}>{link.name}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Nav