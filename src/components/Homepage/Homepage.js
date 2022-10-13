import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Homepage.css'


const Homepage = () => {
    const quizs =useLoaderData();
    console.log(quizs);

    

    return (
        <div className='cart-show'>
           <div className="cart-part">
            <h1 className='Welcome-text'>Welcome to uor Journy</h1>
            <p>It's time to get ready for achiveing your goal. We are providing you with some important life-leading interview question. so explore now Topic wise!</p>


            <div className="cart-part2">

                {
                    quizs.data.map(quiz => <Cart 
                        key={quiz.id}
                        quiz={quiz}

                    ></Cart>)
                }

            </div>
           </div>
        </div>
    );
};

export default Homepage;