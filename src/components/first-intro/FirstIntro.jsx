import React from 'react';
import './first-intro.style.css'
import logo from '../../images/logo/logo.7.png'
import {motion} from 'framer-motion'

const textAnimation = {
    hidden:{
        x:-200,
        opacity:0,
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay: custom*0.2}
    })
  }

const FirstIntro = () => {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible" 
            id='first-intro'
        >
            <nav id='navigate'>
                <motion.ul custom={1} variants={textAnimation} className='d-flex'>
                    <li><a href='#title-info'>About</a></li>
                    <li><a href='#cards-products'>Services</a></li>
                    <li><a href='#pricing'>Price</a></li>
                    <li><a href='https://t.me/u_v_s' target='_blank'>Contact</a></li>
                </motion.ul>
            </nav>
            <div className='container'>
                <div className='d-flex flex-column justify-content-center align-items-center first-intro-content'>
                    <motion.img custom={2} variants={textAnimation} src={logo}/>
                    <motion.div custom={3} variants={textAnimation} className='text-center mt-4'>
                        <p>World Global Solutions Network</p>
                        <p>by Veronika Ulianova</p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};





export default FirstIntro;