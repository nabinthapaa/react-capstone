import React from 'react'
import CTA from './CTA'
import Specials from './Specials'

const specials = [
    {
        url: './assets/greek salad.jpg',
        name: 'Greek Salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce. peppers. olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    }, {
        url: './assets/bruchetta.svg',
        name: 'Bruchetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    }, {
        url: './assets/lemon dessert.jpg',
        name: 'Lemon Dessert',
        price: 8.00,
        description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as it can be imagined.'
    },
]

function Main() {
    return (
        <main>
            <CTA />
            <section className='special-container' >
                <div className='special-title-wrapper'>
                    <p className='title-special'>This Weeks Specials !</p>
                    <button className='online-menu-button'>Online Menu</button>
                </div>
                <div class="special-wrapper">
                    {specials.map(special => <Specials
                        image={special.url}
                        name={special.name}
                        price={special.price}
                        description={special.description}
                    />)}
                </div>
            </section>
        </main>
    )
}

export default Main