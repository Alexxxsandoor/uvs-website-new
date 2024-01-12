import React from 'react';
import './gif-full-width.style.css'
import {motion} from 'framer-motion'
import photo from '../../images/big-img/big_photo_short.jpg'

const imgAnimation = {
    hidden:{
        y:200,
        filter: "blur(10px)",
        opacity:0,
    },
    visible:{
        y:0,
        filter: "blur(0px)",
        opacity:1,
        transition:{delay: 0.2}
    }
  }

const GifFullWidth = () => {
    return (
        <div>
            <motion.div 
                initial="hidden"
                whileInView="visible" 
                className="container"
                variants={imgAnimation}
                >
                <img  id='gif-full-width' src={photo}/>
            </motion.div>
        </div>
    );
};

export default GifFullWidth;