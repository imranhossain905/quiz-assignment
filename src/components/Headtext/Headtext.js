import React from 'react';
import {Link} from 'react-router-dom';
import img1 from '../../image/react.png';
import img2 from '../../image/js.jpg';
import img3 from '../../image/css1.png';
import img4 from '../../image/git.png';
import './Headtext.css'




const Headtext = () => {

    return (
    

            <section className='head-section'>
                <div className='head'>
                    <div className='head-overlay'></div>
                    <div className='head-container'>
                        <h1 className='head-text'>Be your best self by learning from this Quiz</h1>
                        <h4 className='para-text'>
                            If you are give this quiz properly, I hope you are  so much gather knowledge of web development. so you need to carefully Answer.
                            
                        </h4>
                    </div>

                </div>
            </section>


       
    );
};

export default Headtext;