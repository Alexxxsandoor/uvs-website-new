import './big-solo-img.style.css'
import imgBig from '../../images/big-img/big-img.1.png'
import {motion} from 'framer-motion'

const imgAnimation = {
    hidden:{
        x:-200,
        filter: "blur(10px)",
        opacity:0,
    },
    visible:{
        x:0,
        filter: "blur(0px)",
        opacity:1,
        transition:{delay: 0.25}
    }
  }

const BigSoloImg = () => {
    return (
        <motion.div  
            initial="hidden"
            whileInView="visible" 
            id='big-solo-img'
        >
            <motion.div variants={imgAnimation} className="container">
                <img src={imgBig} />
            </motion.div>
        </motion.div>
    );
};

export default BigSoloImg;