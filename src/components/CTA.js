import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
    return (
        <section className='cta-wrapper'>
            <div className="cta">
                <div className="left">
                    <div>
                        <h1 className='cta-title'>Little Lemon</h1>
                        <h3 className='cta-location'>Chicago</h3>
                        <p className='cta-desc'>We are a family owned Mediterranean restaurant, focused on traditionalrecipes served with a moderntwist.</p>
                    </div>
                    <Link to='reservation' className='cta-button'>Reserve a table</Link>
                </div>
                <div className='right'>
                    <div className='cta-image-container'>
                        <img src='/assets/restauranfood.jpg' alt='restaurant food at cta' className='cta-image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA