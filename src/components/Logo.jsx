import React from 'react'
import logo1 from "../assets/Logo1.png"
import logo2 from "../assets/Logo2.png"
import logo3 from "../assets/Logo3.png"
import logo4 from "../assets/Logo4.png"

const Logo = () => {
  return (
    <section className='xl:py-[116px] py-[50px] '>
        <div className=" max-w-container mx-auto flex justify-between flex-wrap ">
            <div className=" xl:w-[24%] w-[50%] ">
                <a className='w-full' href="#"> <img src={logo1} alt="" /> </a>
            </div>
            <div className=" xl:w-[24%] w-[50%] ">
                <a className='w-full' href="#"> <img src={logo2} alt="" /> </a>
            </div>
            <div className=" xl:w-[24%] w-[50%] mt-6 xl:mt-0 ">
                <a className='w-full' href="#"> <img src={logo3} alt="" /> </a>
            </div>
            <div className=" xl:w-[24%] w-[50%] mt-6 xl:mt-0 ">
                <a className='w-full' href="#"> <img src={logo4} alt="" /> </a>
            </div>
        </div>
    </section>
  )
}

export default Logo