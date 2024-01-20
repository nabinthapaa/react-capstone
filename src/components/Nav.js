import React from 'react'

function Nav() {
    return (
        <nav>
            <ul className='navlist'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/reserve_table">Reservation</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav