import React from 'react';
import './CardsProducts.style.css'
import img1 from '../../images/big-img/big-img.4.png'
import img2 from '../../images/big-img/big-img.5.png'
import img3 from '../../images/big-img/big-img.6.png'
import img4 from '../../images/big-img/big-img.8.png'
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
                            <div style={{backgroundImage:`url(${img1})`}} className='block-hands-img'>
                            </div>
                                <h1>Business events Conferences</h1>
                            <h2 className='custom-show-text'>Some text Some text Some text Some text Some text Some text Some text Some text</h2>
                        </motion.div>
                        <motion.div custom={2} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${img2})`}} className='block-hands-img'>
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
                            <div style={{backgroundImage:`url(${img3})`}} className='block-hands-img'>
                            </div>
                                <h1>Business travel</h1>
                            <h2 className='custom-show-text'>Some text Some text Some text Some text Some text Some text Some text Some text</h2>
                        </motion.div>
                        <motion.div custom={4} variants={cardAnimation} className='card-block'>
                            <div style={{backgroundImage:`url(${img4})`}} className='block-hands-img'>
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