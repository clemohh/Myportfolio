import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc/";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[120px] h-[fit] sm:w-[200px] h-[200px] md:w-[200px] h-[200px] xl:w-[250px] h-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] sm:w-full green-pink-gradient p-[1px] items-start rounded-[20px] md:w-full green-pink-gradient p-[1px] rounded-[20px] xl:w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div
          options={{ max: 45, scale: 1, speed: 400 }}
          className="bg-tertiary rounded-[20px] py-3 px-1 h-fit flex-evenly items-center flex-col sm:bg-tertiary rounded-[20px] py-5 px-1 min-h-[170px]  flex-evenly items-center flex-col md:bg-tertiary rounded-[20px] py-5 px-10 min-h-[200px] flex-evenly items-center flex-col xl:bg-tertiary rounded-[20px] py-5 px-10 min-h-[200px] flex-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="sm: w-10 h-10 object-contain md:w-10 h-10  oblect-contain xl:w-10 h-10  oblect-contain " />
          <h3 className="text-white text-[11px] font-bold text-center sm:text-white text-[20px] font-bold md:text-white text-[20px] font-bold xl:text-white text-[20px] font-bold r">
            {title}
          </h3>
         
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl "
      >
        We help players like you share small screenshots (shots) to show off
        your current projects, boost your portfolio, and love what you do—no
        matter what kind of creative professional you are.
      </motion.p>
      <div className="mt-2 flex flex-wrap gap-2 sm:mt-20 flex flex-wrap gap-10 md:mt-20 flex flex-wrap gap-10 xl:mt-20 flex flex-wrap gap-12">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}  {...service} 
          />
          
        ))}
        
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
