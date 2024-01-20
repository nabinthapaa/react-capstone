import React from 'react'
import Nav from './Nav'

function Header() {
    return (
        <header className='header'>
            <div>
                <img src='/assets/logo.svg' alt='little lemon logo' />
            </div>
            <Nav />
        </header>
    )
}

export default Header