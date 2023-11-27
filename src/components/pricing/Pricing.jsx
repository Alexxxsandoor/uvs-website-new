import React, { useId } from 'react';
import './Pricing.style.css'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion'
import ModalWindows from '../modal-windows/ModalWindows';
import LANGUAGE from '../../language';
import { useSelector } from 'react-redux';

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
    const language = useSelector(store => store.language.language)
    const packages = LANGUAGE[language].servicePackage.packages
    const title = LANGUAGE[language].servicePackage.title

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
                            <h2 custom={1} variants={textAnimation}>{title}</h2>
                        </motion.div>
                        <div className='cards flex-wrap d-flex align-items-center justify-content-around mt-5'>
                            {packages.map((el,index)=>(
                                <motion.div  custom={index+1} variants={cardAnimation} className='card d-flex flex-column justify-content-between'>
                                    <p className='title text-center'>{el.title}</p>
                                    <div className='points'>
                                        {el.items.map(el=><p  className='d-flex align-items-center'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>{el}</b></p>)}
                                    </div>
                                    <ModalWindows/>
                                </motion.div>
                            ))}                            
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
        
    );
};

export default Pricing;