import React from 'react'

function Footer() {
    return (
        <footer>
            <hr className='footer-upper-bar' />
            <div className='footer-wrapper'>
                <div className='footer-logo-wrapper'>
                    <img
                        src='./assets/Logo.svg'
                        alt='Little Lemon logo'
                    />
                </div>

                <div className='footer-socials'>
                    <a href='/'>
                        Facebook
                    </a>
                    <a href='/'>
                        Instagram
                    </a>
                    <a href='/'>
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer