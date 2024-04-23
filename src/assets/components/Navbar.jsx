import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
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
                <div className="max-w-container mx-auto">
                    <div className=" flex justify-between items-center">
                        <div className="">
                            <img src={logo} alt="" />
                        </div>
                        <div className="">
                            <ul className=' lg:flex gap-x-6 font-popps text-white font-semibold text-base'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a className=' border-2 boredr-white py-[13px] px-8 rounded-sm inline-block' href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="lg:hidden cursor-pointer" onClick={()=>setShow(!show)}>
                            {show == true ? <RxCross2/> : <FaBars/>}
                            
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar