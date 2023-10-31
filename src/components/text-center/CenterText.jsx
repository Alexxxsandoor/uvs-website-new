import './center-text.style.css'
import {motion} from 'framer-motion'

const textAnimation = {
    hidden:{
        x:200,
        opacity:0,
    },
    visible:{
        x:0,
        opacity:1,
        transition:{delay: 0.2}
    }
  }

const CenterText = () => {
    return (
        <div id='center-text'>
            <div className="container">
                <motion.div             
                    initial="hidden"
                    whileInView="visible"  
                    className='d-flex justify-content-center'
                >
                    <motion.h4 variants={textAnimation}>Let's create something unique together. Drop us a line or give us a call to talk about the next big thing.</motion.h4>
                </motion.div>
            </div>
        </div>
    );
};

export default CenterText;