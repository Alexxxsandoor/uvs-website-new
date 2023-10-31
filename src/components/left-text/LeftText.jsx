import './left-text.style.css'
import {motion} from 'framer-motion'

const textAnimation = {
    hidden:{
        x:-200,
        opacity:0,
    },
    visible:{
        x:0,
        opacity:1,
        transition:{delay: 0.2}
    }
  }

const LeftText = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible" 
            id='left-text'
        >
            <motion.div variants={textAnimation} className="container">
                <h4>At Studio Lenzing, we are all about people. This is why we put collaboration and open dialogue at the heart of our work. We create partnerships at eye-level, working hand in hand for digital change.</h4>
                <a>WHO WE ARE</a>
            </motion.div>
        </motion.div>
    );
};

export default LeftText;