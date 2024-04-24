import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const Copy = () => {
  return (
    <section className=' py-[42px] bg-[#282828] '>
        <div className=" max-w-container mx-auto xl:text-start text-center ">
            <div className="">
                <p className=' font-popps font-medium text-[18px] text-[#6C6C6C] '>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
            </div>
            <ScrollToTop smooth />
        </div>
    </section>
  )
}

export default Copy