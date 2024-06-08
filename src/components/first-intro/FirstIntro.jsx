import React from 'react';
import './first-intro.style.css'
// import logo from '../../images/logo/logo.11.png'
// import logo from '../../images/logo/logo.3.png'
// import logo from '../../images/logo/logo.8.png'
import logo from '../../images/logo/logo12.svg'
import {motion} from 'framer-motion'
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import LANGUAGE from '../../language';

const textAnimation = {
    hidden:{
        x:-100,
        opacity:0,
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay: custom*0.2}
    })
  }

const FirstIntro = () => {
    const language = useSelector(store => store.language.language)
    const {top,bottom} = LANGUAGE[language].intro
    return (
        <>
            <Header/>
            <motion.section 
                initial="hidden"
                whileInView="visible" 
                id='first-intro'
            >
                <div className='container'>
                    <div className='d-flex flex-column justify-content-center align-items-center first-intro-content'>
                        <div id="logo">
                            <motion.img custom={2} variants={textAnimation} src={logo}/>
                            <motion.h4 custom={3} variants={textAnimation} className='text-center'><span>U</span><span>V</span><span>S</span></motion.h4>
                        </div>
                    </div>
                    <motion.div id='uvs-text' custom={4} variants={textAnimation} className='text-center'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <p>{top}</p>
                            <p>{bottom}</p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};





export default FirstIntro;