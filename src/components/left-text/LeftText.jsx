import { useSelector } from 'react-redux';
import './left-text.style.css'
import {motion} from 'framer-motion'
import LANGUAGE from '../../language';

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
    const language = useSelector(store => store.language.language)
    const singleText = LANGUAGE[language].singleText

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible" 
            id='left-text'
            className="container"
        >
            <motion.div variants={textAnimation} >
                <h4>{singleText}</h4>
            </motion.div>
        </motion.div>
    );
};

export default LeftText;