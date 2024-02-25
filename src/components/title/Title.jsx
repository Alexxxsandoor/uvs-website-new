import React from "react";
import { motion } from "framer-motion";
import "./title.style.css";
import { useSelector } from "react-redux";
import LANGUAGE from "../../language";

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

const Title = () => {
  const language = useSelector((store) => store.language.language);
  const { title } = LANGUAGE[language].firstTitle;

  return (
    <motion.section initial="hidden" whileInView="visible" id="first-title-info">
      <div className="container">
        <motion.h4 custom={1} className="title" variants={textLeftAnimation}>
          <p>{title}</p>
        </motion.h4>
      </div>
    </motion.section>
  );
};

export default Title;
