import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizquest.css'



const Quizquest = () => {
    const quizIds = useLoaderData();
    console.log(quizIds);
    
    return (
        <div className='Quiz-data '>
               {
                quizIds.data.map(quizId => <Quiz
                    key={quizId.id}
                    quizId={quizId}
                ></Quiz> )
               } 
        </div>
    );
};

export default Quizquest;