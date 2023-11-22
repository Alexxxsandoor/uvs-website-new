import React from 'react';
import './Pricing.style.css'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion'
import ModalWindows from '../modal-windows/ModalWindows';

const textAnimation = {
    hidden:{
        x:-100,
        opacity:0,
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay: custom*0.2}
    })
  }

  const cardAnimation = {
    hidden:{
        y:100,
        opacity:0,
    },
    visible:custom=>({
        y:0,
        opacity:1,
        transition:{delay: custom*0.25}
    })
  }

const Pricing = () => {
    return (
        <>
        
            <motion.section  
                initial="hidden"
                whileInView="visible" 
                id='pricing' 
                className='py-2'
            >
                <div className="container">
                    <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
                        <motion.div className='text-center custom-line py-1'>
                            {/* <h1 custom={1} variants={textAnimation}>Service Package</h1> */}
                            <h2 custom={1} variants={textAnimation}>SERVICE PACKAGE</h2>
                            {/* <motion.p custom={2} variants={textAnimation}>About the price about the price about the price about the price about the price about the price about the price</motion.p> */}
                        </motion.div>
                        <div className='cards flex-wrap d-flex align-items-center justify-content-around mt-5'>
                        <motion.div custom={2} variants={cardAnimation} className='card d-flex flex-column justify-content-between'>
                                <p className='title text-center'>Individual Support</p>
                                <div className='points'>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Real estate and accommodation</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Events</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Personal assistance</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Legal and financial support</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Travel support</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Business trainig</b></p>
                                </div>
                                <ModalWindows/>
                            </motion.div>
                            
                            <motion.div custom={3} variants={cardAnimation} className='card primary d-flex flex-column justify-content-between'>
                                <p className='title text-center'>Corporate Support</p>
                                <div className='points'>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Business Travel</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Conferences</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Business Training</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Advertising</b></p>
                                </div>
                                <ModalWindows/>
                            </motion.div>
                            <motion.div custom={4} variants={cardAnimation} className='card d-flex flex-column justify-content-between'>
                                <p className='title text-center'>Exhibitions</p>
                                <div className='points'>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Digital business exhibitions</b></p>
                                    <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Thematic business art exhibition</b></p>
                                </div>
                                <ModalWindows/>
                            </motion.div>
                            
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
        
    );
};

{/* <motion.div custom={5} variants={cardAnimation} className='card primary d-flex flex-column justify-content-between'>
                            <p className='title'>Popular</p>
                            <p className='price'><span>500$</span>/month</p>
                            <p className='content'>Why such a price and what is it briefly Why such a price and what is it briefly</p>
                            <div className='points'>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                            </div>
                            <ModalWindows/>
                        </motion.div> */}

export default Pricing;