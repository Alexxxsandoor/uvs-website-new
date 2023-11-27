import React from 'react';
import {motion} from 'framer-motion'
import "./title.style.css"
import { useSelector } from 'react-redux';
import LANGUAGE from '../../language'

const textLeftAnimation = {
    hidden:{
        x:-100,
        opacity:0,
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay: custom*0.25}
    })
  }
const textRightAnimation = {
    hidden:{
        x:100,
        opacity:0,
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay: custom*0.25}
    })
  }

const Title = () => {
    const language = useSelector(store => store.language.language)
    const {title, body,firstSubsection,secondarySubsection} = LANGUAGE[language].firstTitle

    return (
        <motion.section 
        initial="hidden"
        whileInView="visible" 
        id='title-info'
    >
        <div className='container'>
            <motion.h4 custom={1} className='title' variants={textLeftAnimation}><b>{title}</b></motion.h4>
            <motion.h4 custom={2} variants={textLeftAnimation}>{body}</motion.h4>
            <div className='secondary-text d-flex justify-content-end flex-wrap' >
                <motion.h5 custom={3} variants={textRightAnimation}>{firstSubsection}</motion.h5>
                <motion.h5 custom={4} variants={textRightAnimation}>{secondarySubsection}</motion.h5>
            </div>
        </div>
    </motion.section>

        
    );
};

export default Title;