import React from 'react';
import './CardsProducts.style.css'
import hand1 from '../../images/hands/hands.1.png'
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
                <p className='title-block'><b>Explore Some of our Case Studies</b></p>
                <motion.div 
                    initial="hidden"
                    whileInView="visible" 
                    id='cards-block'
                >
                    <div className='custom-card d-flex justify-content-around flex-wrap'>
                        <motion.div custom={1} variants={cardAnimation} className='card-block'>
                            <div  className='block-hands-img'>
                                <img src={hand1} />
                            </div>
                            <div className='d-flex justify-content-between block-content'>
                                <p><b>Syte</b></p>
                                <p>Syte empowers project developers, investors, agents, architects and city planners to spot interesting properties with development potential.</p>
                            </div>
                        </motion.div>
                        <motion.div custom={2} variants={cardAnimation} className='card-block'>
                        <div className='block-hands-img'>
                                <img src={hand1} />
                            </div>
                            <div className='d-flex justify-content-between block-content'>
                                <p><b>Syte</b></p>
                                <p>Syte empowers project developers, investors, agents, architects and city planners to spot interesting properties with development potential.</p>
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
                        <motion.div custom={1} variants={cardAnimation} className='card-block'>
                            <div  className='block-hands-img'>
                                <img src={hand1} />
                            </div>
                            <div className='d-flex justify-content-between block-content'>
                                <p><b>Syte</b></p>
                                <p>Syte empowers project developers, investors, agents, architects and city planners to spot interesting properties with development potential.</p>
                            </div>
                        </motion.div>
                        <motion.div custom={2} variants={cardAnimation} className='card-block'>
                        <div className='block-hands-img'>
                                <img src={hand1} />
                            </div>
                            <div className='d-flex justify-content-between block-content'>
                                <p><b>Syte</b></p>
                                <p>Syte empowers project developers, investors, agents, architects and city planners to spot interesting properties with development potential.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CardsProducts;