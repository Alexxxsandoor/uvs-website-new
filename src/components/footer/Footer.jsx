import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './footer.style.css'

import React from 'react';

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <ul className='d-flex justify-content-center align-items-center'>
                    <li><a href='/'><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href='/'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href='/'><FontAwesomeIcon icon={faInstagram} /></a></li>
                    
                </ul>
                <p className='text-center mt-2'>© {new Date().getFullYear()}. UVS. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;