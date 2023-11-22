import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,  faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './footer.style.css'

import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <ul className='d-flex justify-content-center align-items-center'>
                    <li><a href='/'><FontAwesomeIcon icon={faXTwitter} size='xl'/></a></li>
                    <li><a href='/'><FontAwesomeIcon icon={faLinkedinIn} size='xl'/></a></li>
                    {/* <li><a href='/'><FontAwesomeIcon icon={faEnvelope} size='xl' /></a></li> */}
                    
                    
                </ul>
                <p className='text-center mt-2'>© {new Date().getFullYear()}. UVS. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;