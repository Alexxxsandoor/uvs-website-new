import './center-text.style.css'
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

const CenterText = () => {
    return (
        <div id='center-text' className='mt-4'>
            <div className="container">
                <motion.div             
                    initial="hidden"
                    whileInView="visible"  
                    className='d-flex flex-column text-center align-items-center justify-content-center'
                >
                    <motion.h4 variants={textAnimation}>We offer long-term turnkey cooperation.</motion.h4>
                    <motion.h4 variants={textAnimation}>You can find out more details about cooperation by contacting us.</motion.h4>
                </motion.div>
            </div>
        </div>
    );
};

export default CenterText;