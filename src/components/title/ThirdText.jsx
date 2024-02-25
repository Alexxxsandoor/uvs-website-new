import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import LANGUAGE from "../../language";
import "./title.style.css";
import bgImg from '../../images/bg-image.svg' 

const textLeftAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.25 },
  }),
};
const textRightAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.25 },
  }),
};

const ThirdText = () => {
  const language = useSelector((store) => store.language.language);
  const { body, firstSubsection, secondarySubsection } =
    LANGUAGE[language].firstTitle;
  return (
    <div className="container" >
          
      <motion.div initial="hidden" whileInView="visible" id="title-info">
      <motion.img custom={2} variants={textLeftAnimation} id="title-info-bg-img-fir" src={bgImg} alt=""/>  
      <motion.img custom={2} variants={textLeftAnimation} id="title-info-bg-img-sec" src={bgImg} alt=""/>  
        <motion.h4 custom={1} variants={textLeftAnimation}>
          {body}
        </motion.h4>
        <div className="secondary-text d-flex justify-content-end flex-wrap">
          <motion.h5 custom={2} variants={textRightAnimation}>
            {firstSubsection}
          </motion.h5>
          <motion.h5 custom={3} variants={textRightAnimation}>
            {secondarySubsection}
          </motion.h5>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdText;
