import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './small-cards.style.css'
import { faChartLine, faChartSimple, faClipboardCheck, faClock, faCopyright, faEarthAmericas, faHandshake, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'

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
    const card =[
        {
            icon: faChartLine,
            content: `Піднімаємо ефективність співробітників `
        },
        {
            icon: faChartSimple,
            content: `Піднімаємо показники компаній`
        },
        {
            icon: faClock,
            content: `Економимо ваш час`
        },
        {
            icon: faEarthAmericas,
            content: `Забезпечуємо комфорт в будь-якій точці світу `
        },
        {
            icon: faHandshake,
            content: `Нові партнерства стають ще більш доступними`
        },
        {
            icon: faCopyright,
            content: `Впізнаваність бренду`
        },
        {
            icon: faPeopleGroup,
            content: `Додатковий цільовий трафік`
        },
        {
            icon: faClipboardCheck,
            content: `Підіймаємо рівень кваліфікації та особистого розвитку`
        },
    ]
    return (
        <div 

            className='container' id='cards-on-key'
            >
            <motion.div 
                initial="hidden"
                whileInView="visible"  
                id='cards-on-key-content'
            >
                {card.map((card, index)=>
                    <motion.div custom={index+1} variants={cardAnimation} className='small-card text-center'>
                        <p className='mb-3 custom-icons'><FontAwesomeIcon icon={card.icon} size='2xl'/></p>
                        <p>{card.content}</p>
                    </motion.div>   
                )}
            </motion.div>
        </div>
        
    );
};

export default SmallCards;