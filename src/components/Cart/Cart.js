import React from 'react';
import './Cart.css'

const Cart = ({ quiz }) => {
    const { logo, name, total } = quiz;



    return (

        <div className="cart-container">
            <div className='topics-card'>
                <div className='card' >
                    <img className='img' src={logo} alt="" />
                    <p className='total-text'>Total Quistion: {total}</p>

                    <div className='cart-footer'>
                        <h1> {name}</h1>
                        <button className='btn-start'>Start Practice <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>














    );
};

export default Cart;