import React from 'react'
import { FiMail } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";




const Header = () => {
  return (
    <>
          <header className='bg-[#282828] py-5 border-b-2 border-[#FFB800]'>
              <div className="mx-auto max-w-container text-white font-popps">
                  <div className=" lg:flex items-center">
                      <div className="lg:w-1/5 w-full">
                          <div className=" flex items-center justify-center lg:justify-normal gap-x-1">
                              <div className="">
                                  <FiMail className='text-[15px]' />
                              </div>
                              <a href="mailto:mail@yourcompany.com" className='text-[12px] font-normal'>mail@yourcompany.com</a>
                          </div>
                      </div>
                      <div className="lg:w-1/5 w-full lg:pt-0 pt-3">
                          <div className=" flex items-center justify-center gap-x-1">
                              <div className="">
                                  <TbPhoneCall className='text-[15px]' />
                              </div>
                              <a href="tel:+896 120 5889" className='text-[12px] font-normal'>+896 120 5889 (Toll free)</a>
                          </div>
                      </div>
                      <div className="lg:w-3/5 w-full lg:pt-0 pt-3">
                          <div className=" justify-center flex  gap-x-4 lg:justify-end">
                              <a href="#"><FaFacebookF /></a>
                              <a href="#"><FaTwitter /></a>
                              <a href="#"><FaLinkedinIn /></a>
                              <a href="#"><FaInstagram /></a>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
    </>
  )
}

export default Header