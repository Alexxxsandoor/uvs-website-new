import React from 'react';
import './CardsProducts.style.css'
import Business_events from '../../images/big-img/Business_events.jpg'
import Business_travel from '../../images/big-img/Business_travel.jpg'
import Exhibitions from '../../images/big-img/Exhibitions.jpg'
import Individual_support from '../../images/big-img/Individual_support.jpg'
import {motion} from 'framer-motion'
import LANGUAGE from '../../language';
import { useSelector } from 'react-redux';

const cardAnimation = {
    hidden:{
        x:-100,
        filter: "blur(10px)",
        opacity:0,
    },
    visible:custom=>({
        x:0,
        filter: "blur(0px)",
        opacity:1,
        transition:{delay: custom*0.25}
    })
}


const CardsProducts = () => {
    const language = useSelector(store => store.language.language)

    const {title, card1,card2,card3,card4} = LANGUAGE[language].cardProduct

    return (
        <section id='cards-products'>
            <div className='container'>
                <h5 className='title-block'>{title}</h5>
                <motion.div 
                    initial="hidden"
                    whileInView="visible" 
                    id='cards-block'
                >
                    <div className='custom-card d-flex justify-content-around flex-wrap'>
                        <motion.div custom={1} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${Business_events})`}} className='block-hands-img'>
                            </div>
                                <h1>{card1.title}</h1>
                                <div className='custom-show-text text-center'>
                                    {card1.body.map(text=><p>{text}</p>)}
                                </div>    
                        </motion.div>
                        <motion.div custom={2} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${Exhibitions})`}} className='block-hands-img'>
                            </div>
                                <h1>{card2.title}</h1>
                                <div className='custom-show-text text-center'>
                                    {card2.body.map(text=><p>{text}</p>)}
                                </div> 
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible" 
                    id='cards-block'
                >
                    <div className='custom-card d-flex justify-content-around flex-wrap'>
                        <motion.div custom={3} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${Business_travel})`}} className='block-hands-img'>
                            </div>
                                <h1>{card3.title}</h1>
                                <div className='custom-show-text text-center'>
                                    {card3.body.map(text=><p>{text}</p>)}
                                </div> 
                        </motion.div>
                        <motion.div custom={4} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${Individual_support})`}} className='block-hands-img'>
                            </div>
                                <h1>{card4.title}</h1>
                                <div className='custom-show-text text-center'>
                                    {card4.body.map(text=><p>{text}</p>)}
                                </div> 
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CardsProducts;