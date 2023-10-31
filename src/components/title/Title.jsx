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
        <motion.div 
            initial="hidden"
            whileInView="visible" 
            id='title-info'
        >
            <div className='container'>
                <motion.p custom={1} variants={textLeftAnimation}><b>World Global Solutions Network</b></motion.p>
                <motion.h4 custom={2} variants={textLeftAnimation}>We design, build and launch products that are built to last in a fast-acting world — accurately connecting business, UX & UI, storytelling and engineering through sustainable design.</motion.h4>
                <div className='secondary-text d-flex justify-content-end flex-wrap' >
                    <motion.p custom={3} variants={textRightAnimation}>We believe our relationship with technology should be delightful. That is why we have made it our mission to create better interactions.</motion.p>
                    <motion.p custom={4} variants={textRightAnimation}>More meaningful connections. Lifelong relationships. A positive dialogue between users and brands. Between companies and the world.</motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default Title;