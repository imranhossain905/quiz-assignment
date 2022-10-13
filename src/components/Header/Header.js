import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    
    return (
        
            <nav className='header-nav '>
                <div className='nav-container'>
                    <h2 className='planet'> Quiz Planet</h2>

                    <div className="menu">
                    <Link className='menu-link' to='/'>Home</Link>
                    <Link className='menu-link' to='/topic'>Topics</Link>
                    <Link className='menu-link' to='/statistics'>Statistics</Link>
                    <Link className='menu-link' to='/blog'>Blog</Link>
                    </div>
                </div>
                    
                    
            </nav>
                    
               
        
    );
};

export default Header;