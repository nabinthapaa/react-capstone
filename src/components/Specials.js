import React from 'react'

function Specials({ image, price, name, description }) {
    return (
        <div className='specials'>
            <div className='specials-image-wrapper'>
                <img src={image} alt={name} />
            </div>
            <div className="special-bottom-wrapper">
                <div className='special-name-price'>
                    <p className='special-name'>{name}</p>
                    <p className='special-price'>${price}</p>
                </div>
                <div className='special-desc'>{description}</div>
            </div>

            <button className='special-order'>Order Delivery</button>
        </div>
    )
}

export default Specials