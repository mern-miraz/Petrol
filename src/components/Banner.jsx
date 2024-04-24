import React from 'react'

const Banner = () => {
  return (
    <>
    <section className='bg-ban py-[100px] lg:py-[258px] bg-center bg-no-repeat bg-cover relative after:absolute after:content-[""] after:left-0 after:top-0 after:h-full after:w-full after:bg-[#00000080] z-[1] after:z-[-1]'>

        <div className="max-w-container mx-auto z-[1]">
            <h1 className=" font-popps font-bold text-[24px] lg:text-[64px] text-white lg:pr-[400px] pb-[31px] lg:pb-[40px] text-center lg:text-start ">
             We exist since 1975 on the oil and gas industry.
            </h1>
            <div className=" text-center lg:text-start ">
                <a href="#" className='font-popps font-semibold text-[16px] text-white py-[14px] px-[41px] bg-[#F40404] uppercase'>LEARN MORE</a>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Banner