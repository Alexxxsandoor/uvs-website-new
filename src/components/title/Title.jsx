import React from 'react';
import {motion} from 'framer-motion'
import "./title.style.css"


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
    return (

        <motion.section 
        initial="hidden"
        whileInView="visible" 
        id='title-info'
    >
        <div className='container'>
            <motion.h5 custom={1} className='text-center' variants={textLeftAnimation}><b>Welcome to the world of UVS - my agency created to enhance the productivity of your life and your business.</b></motion.h5>
            <motion.h4 custom={2} variants={textLeftAnimation}>We design, create, and organize personal experiences, business events, business travels, thematic conferences and exhibitions. We offer innovative solutions that provide an additional opportunity for your growth and the growth of your business.</motion.h4>
            <div className='secondary-text d-flex justify-content-end flex-wrap' >
                <motion.h6 custom={3} variants={textRightAnimation}>We offer you to be by your side every step of the way.</motion.h6>
                <motion.h6 custom={4} variants={textRightAnimation}>More meaningful connections. Lifelong relationships. A positive dialogue between you and the world. </motion.h6>
            </div>
        </div>
    </motion.section>

        
    );
};

export default Title;