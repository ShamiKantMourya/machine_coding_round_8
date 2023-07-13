import React from 'react';
import {FaSearch} from "react-icons/fa"

import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='text-h1'>
                <h2 className='text'>MeetUp</h2>
            </div>

            <div className='input'>
                <input type='search' placeholder='search by title and tag' className='input-field' />
                <button><FaSearch /></button>
            </div>

        </div>
    )
}

export default Header;