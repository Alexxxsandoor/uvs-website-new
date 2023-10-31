import React from 'react';
import './Pricing.style.css'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion'
import ModalWindows from '../modal-windows/ModalWindows';

const textAnimation = {
    hidden:{
        x:200,
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
        <motion.section  
            initial="hidden"
            whileInView="visible" 
            id='pricing' 
            className='py-5'
        >
            <div className="container">
                <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
                    <div className='text-center  pt-4'>
                        <motion.h1 custom={1} variants={textAnimation}>Pricing Pricing Pricing</motion.h1>
                        <motion.p custom={2} variants={textAnimation}>About the price about the price about the price about the price about the price about the price about the price</motion.p>
                    </div>
                    <div className='cards flex-wrap d-flex align-items-center justify-content-around mt-5'>
                        <motion.div custom={3} variants={cardAnimation} className='card d-flex flex-column justify-content-between'>
                            <p className='title'>Beginer</p>
                            <p className='price'><span>200$</span>/month</p>
                            <p className='content'>Why such a price and what is it briefly Why such a price and what is it briefly</p>
                            <div className='points'>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                            </div>
                            <ModalWindows/>
                        </motion.div>
                        <motion.div custom={5} variants={cardAnimation} className='card primary d-flex flex-column justify-content-between'>
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
                        </motion.div>
                        <motion.div custom={4} variants={cardAnimation} className='card d-flex flex-column justify-content-between'>
                            <p className='title'>Custom</p>
                            <p className='price'><span>300$</span>/month</p>
                            <p className='content'>Why such a price and what is it briefly Why such a price and what is it briefly</p>
                            <div className='points'>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                                <p className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></p>
                            </div>
                            
                            <ModalWindows/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Pricing;