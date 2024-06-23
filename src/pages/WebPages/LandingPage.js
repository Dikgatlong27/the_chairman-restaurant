import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './LandingPage.css'

const LandingPage = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    return (
        <div className='app__landingPage app__bg '>
            <h1 className='headtext__cursive'>Welcome To The Chairman</h1>
            <h2 className='app__landingPage-subText'>Fortaleza de Sol</h2>
            <div className='app__landingPage_dropDown-container'>
                <button className='dropbtn custom__button' onClick={toggleDropdown}>Branches</button>
                {dropdownVisible && (
                    <div className='dropdown-content flex__center'>
                        <Link to='/home' id='branches' className='p__opensans'>Hatfield Branch</Link>
                        <Link id='branches' className='p__opensans dropdown-content-ezulwiniBtn'>Ezulwini Branch</Link>
                    </div>
                )}
                
            </div>
            
        </div>
    )
}

export default LandingPage
