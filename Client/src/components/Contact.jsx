import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Swal from 'sweetalert2';


const SERVICE_ID= 'service_9fht316'
const TEMPLATE_ID= 'template_c3ss507'
const PUBLIC_KEY= '8nPLUKZlg44pxK7Gh'

const Contact = () => {


  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm( SERVICE_ID, TEMPLATE_ID, 
      e.target, PUBLIC_KEY
      ).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="xs:flex  max-w-md mx-auto grid grid-cols-1  sm:flex mt-[-10%] h-fit mt-12 flex mx-w-sm  xl:flex-row flex-col-reverse mx-w-xl gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 2)}
        className="flex-[0.75] place-content-center bg-gradient-to-r from-sky-500 to-indigo-500 p-8 rounded-2xl sm:bg-tertiary"
        style={{
         alignItems:"flex-start"
        }}
      >
        <p className={styles.sectionSubText} style={{
          color:"black",
          fontFamily:"sans-serif"
        }}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleOnSubmit}
          className="sm:mt-1 gap-1 xl:flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="sm:m-1 xl:text-white font-medium ">
              Your Name <span style={{
                color:'red',
                fontSize:'1rem'
              }}>*</span>
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="sm:py-2 px-2 font-[10px] h-10 xl:bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col ">
            <span className="sm:m-1 font-[10px] mb-1 xl:text-white font-medium  ">
              Your email <span style={{
                color:'red'
              }}>*</span>
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="sm:py-2 px-2 font-[10px] h-10 xl:bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="sm:font-[5px] text-white  xl:text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={2}
              name="message"
              placeholder="What you want to say?"
              className="sm:font-[10px] py-2 px-3 xl:bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg- m-2 xl:bg-gradient-to-r from-sky-400 to-indigo-500 py-3 border px-8 rounded-xl outline-none w-fit text-white font-bold shadow-xl shadow-black-100 hover "
          >
            SEND
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
