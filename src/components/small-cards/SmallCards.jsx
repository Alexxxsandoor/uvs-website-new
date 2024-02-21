import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './small-cards.style.css'
import { faChartLine, faChartSimple, faClipboardCheck, faClock, faCopyright, faEarthAmericas, faHandshake, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'
import LANGUAGE from '../../language';
import { useSelector } from 'react-redux';

const cardAnimation = {
    hidden:{
        y:50,
        opacity:0,
    },
    visible:custom=>({
        y:0,
        opacity:1,
        transition:{delay: custom*0.13}
    })
  }

const SmallCards = () => {
    const language = useSelector(store => store.language.language)
    const smallCardContents = LANGUAGE[language].smallCard
    const cardIcons = [faChartLine, faChartSimple, faClock, faEarthAmericas, faHandshake, faCopyright, faPeopleGroup, faClipboardCheck]
    return (
        <div 

            className='container' id='cards-on-key'
            >
            <motion.div 
                initial="hidden"
                whileInView="visible"  
                id='cards-on-key-content'
            >
                {smallCardContents.map((card, index)=>
                    <motion.div custom={index+1} variants={cardAnimation} className='small-card text-center'>
                        <p className='mb-3 custom-icons'><FontAwesomeIcon icon={cardIcons[index]} size='2xl'/></p>
                        <p>{card}</p>
                    </motion.div>   
                )}
            </motion.div>
        </div>
        
    );
};

export default SmallCards;