import React from 'react'
import logo from "../assets/Logo.png"
import { FiMail } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";


const Footer = () => {
  return (
    <section className=' xl:pt-[148px] xl:pb-[170px] py-[50px] bg-[#1F1F1F] '>
        <div className=" max-w-container mx-auto flex flex-wrap font-popps text-white pl-3 xl:pl-0 ">
            <div className=" xl:w-[30%]">
                <div className="">
                        <a className='w-full' href="#"> <img src={logo} alt="Logo" /> </a>
                </div>
                <div className=" flex items-center mt-8">
                    <FiMail/>
                    <a className='font-popps font-normal text-[14px] pl-2 ' href="mailto:mail@yourcompany.com">mail@yourcompany.com</a>
                </div>
                <div className="flex items-center mt-3">
                    <TbPhoneCall/>
                    <a className='font-popps font-normal text-[14px] pl-2 ' href="tel:+896 120 5889">+896 120 5889 (Toll free)</a>
                </div>
                <div className="flex items-center mt-3">
                    <LuMapPin/>
                    <map className='font-popps font-normal text-[14px] pl-2 ' name="">101 Baker Street, New York, USA, 12345</map>
                </div>
                <div className="flex items-center xl:mt-10 mt-5 gap-x-4">
                    <a className='p-4 bg-[#F40404] rounded-[50%] text-[20px] ' href="#"><FaFacebookF/></a>
                    <a className='p-4 bg-[#F40404] rounded-[50%] text-[20px] ' href="#"><FaTwitter/></a>
                    <a className='p-4 bg-[#F40404] rounded-[50%] text-[20px] ' href="#"><FaLinkedinIn/></a>
                    <a className='p-4 bg-[#F40404] rounded-[50%] text-[20px] ' href="#"><FaInstagram/></a>
                </div>
            </div>
            <div className=" xl:w-[20%] w-[50%] xl:mt-6 mt-9 ">
                <h3 className=' font-popps font-bold text-[16px] '>Company</h3>
                <ul className='mt-4 font-popps font-normal text-[14px] '>
                    <li><a  href="#">Home</a></li>
                    <li className='pt-[10px]'><a  href="#">About</a></li>
                    <li className='pt-[10px]'><a  href="#">Services</a></li>
                    <li className='pt-[10px]'><a  href="#">Gallery</a></li>
                </ul>
            </div>
            <div className=" xl:w-[20%] w-[50%] xl:mt-6 mt-10 ">
                <h3 className='font-popps font-bold text-[16px] '>Others</h3>
                <ul className='mt-4 font-popps font-normal text-[14px] '>
                    <li><a href="#">Blog</a></li>
                    <li className='pt-[10px]'><a href="#">Contact</a></li>
                    <li className='pt-[10px]'><a href="#">Term & Condition</a></li>
                    <li className='pt-[10px]'><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className=" xl:w-[30%] xl:mt-6 mt-10 ">
                <h3 className='font-popps font-bold text-[16px]'>Certificate</h3>
                <div className="flex mt-4">
                <div className=" pt-[6px] pr-[12px] pb-[4px] pl-[9px] bg-white text-[#008AD8] rounded-[4px] ">
                    <p className='font-popps font-bold text-[24px] mb-[-12px] '>ISO 88</p>
                    <span className='font-popps font-medium text-[8px] '>Environmentally Safe</span>
                </div>
                <div className=" ml-2  ">
                    <p className=' py-[19px] px-[12px] bg-white rounded-[4px] font-popps font-bold text-[14px] text-[#980077] '>LiquidX<span className='text-[#009818] '>Green</span></p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer