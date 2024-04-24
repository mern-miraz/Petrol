import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
    let [show, setShow] = useState (false)
    // let handleShow = ()=>{
    //     setShow (!show)
    // }

    return (
        <>
            <nav className='bg-[#F40404] py-8'>
                <div className="max-w-container px-3 lg:px-0 mx-auto">
                    <div className=" flex justify-between items-center">
                        <div className="">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                        <div className="">
                            <ul className={`lg:flex items-center pl-3 lg:pl-0 gap-x-6 absolute top-0 left-0 lg:static ${show == true ? " bg-green-600 top-[227px] w-full duration-700 ease-in-out" : " top-[-200px] left-[-400px] w-full duration-700 ease-in-out" }`}>
                                <li><a className='font-popps text-white font-semibold text-xl lg:text-base' href="#">Home</a></li>
                                <li><a className='font-popps text-white font-semibold text-xl lg:text-base' href="#">About</a></li>
                                <li><a className='font-popps text-white font-semibold text-xl lg:text-base' href="#">Services</a></li>
                                <li><a className='font-popps text-white font-semibold text-xl lg:text-base' href="#">Gallery</a></li>
                                <li><a className='font-popps text-white font-semibold text-xl lg:text-base' href="#">Blog</a></li>
                                <li><a className=' font-popps text-white font-semibold text-xl lg:text-base lg:border-2 lg:boredr-white lg:py-[13px] lg:px-8 rounded-sm inline-block' href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="lg:hidden cursor-pointer font-popps font-semibold text-3xl" onClick={()=>setShow(!show)}>
                            {show == true ? <RxCross2/> : <FaBars/>}              
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar