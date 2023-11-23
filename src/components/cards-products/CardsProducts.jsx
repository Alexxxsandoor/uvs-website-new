import React from 'react';
import './CardsProducts.style.css'
import Business_events from '../../images/big-img/Business_events.jpg'
import Business_travel from '../../images/big-img/Business_travel.jpg'
import Exhibitions from '../../images/big-img/Exhibitions.jpg'
import Individual_support from '../../images/big-img/Individual_support.jpg'
import {motion} from 'framer-motion'

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
    return (
        <section id='cards-products'>
            <div className='container'>
                <h5 className='title-block'><b>Explore some of our services</b></h5>
                <motion.div 
                    initial="hidden"
                    whileInView="visible" 
                    id='cards-block'
                >
                    <div className='custom-card d-flex justify-content-around flex-wrap'>
                        <motion.div custom={1} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${Business_events})`}} className='block-hands-img'>
                            </div>
                                <h1>Business events Conferences</h1>
                            <h2 className='custom-show-text'>Some text Some text Some text Some text Some text Some text Some text Some text</h2>
                        </motion.div>
                        <motion.div custom={2} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${Exhibitions})`}} className='block-hands-img'>
                            </div>
                                <h1>Exhibitions</h1>
                            <h2 className='custom-show-text'>Some text Some text Some text Some text Some text Some text Some text Some text</h2>
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
                                <h1>Business travel</h1>
                            <h2 className='custom-show-text'>Some text Some text Some text Some text Some text Some text Some text Some text</h2>
                        </motion.div>
                        <motion.div custom={4} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${Individual_support})`}} className='block-hands-img'>
                            </div>
                                <h1>Individual Support</h1>
                            <h2 className='custom-show-text'>Some text Some text Some text Some text Some text Some text Some text Some text</h2>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CardsProducts;