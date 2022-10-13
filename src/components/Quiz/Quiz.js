import React from 'react';
import './Quiz.css'

const Quiz = ({params}) => {
    const {name, questions, options}= params;
    return (
        <section className='Quiz-section'>
            <div className="container">
                <h2> Name: {name}</h2>
                <div className="ques">
                    <h2>questions: {questions}</h2>
                    <div className="option">
                        <p>options: {options}</p>
                    </div>
                </div>
            </div>



           
        </section>
    );
};

export default Quiz;