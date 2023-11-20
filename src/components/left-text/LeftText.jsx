import './left-text.style.css'
import {motion} from 'framer-motion'

const textAnimation = {
    hidden:{
        x:-100,
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
                <h4>At UVS, we are all about people. We build new connections for growth. This is why we put collaboration and open dialogue at the heart of our work. We create partnerships at high level, working hand in hand for increasing our personal and market value.</h4>
            </motion.div>
        </motion.div>
    );
};

export default LeftText;