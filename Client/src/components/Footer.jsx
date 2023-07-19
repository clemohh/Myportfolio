import React from "react";
import { BsTwitter, BsInstagram,BsWhatsapp, BsTelephoneInbound } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="app__social">
        <div>
          <a
            href="https://twitter.com/@clement_muli1"
            alt="link"
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/klemoh.wambua/" alt="link">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://instagram.com/cle_ment4" alt="link">
            <BsInstagram />
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/+254115062024/"
            alt="link"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
      
      <div className="flex pb-4 justify-center items-center gap-2 cursor-pointer">
      <div className="h-[1px] w-[20%] bg-white-100"/>
        <div className="bg-white w-10 h-10 rounded-[50%] flex items-center justify-center">
        <a href="" className="text-indigo-800"><BsTelephoneInbound /></a>
        </div>
        <div className="bg-white w-10 h-10 rounded-[50%] flex items-center justify-center">
          <a href="mailto: [@clementwa01@gmail.com]" className="text-indigo-950"><AiOutlineMail/></a>
        </div>
        <div className="bg-white w-10 h-10 rounded-[50%] flex items-center justify-center">
          <a href="https://www.google.com/maps/place/Nairobi/@-1.3028603,36.6822368,11z/data=!3m1!4b1!4m6!3m5!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2920659!4d36.8219462!16zL20vMDVkNDk?entry=ttu" className="text-indigo-950"><CiLocationOn/></a>
        </div>
        <div className="h-[1px] w-[20%] bg-white-100"/>
      </div>
    </div>
  );
};

export default Footer;
