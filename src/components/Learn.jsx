import React from 'react'

const Learn = () => {
  return (
    <section className='xl:py-[136px] bg-[#F0F0F0] py-[80px] '>
        <div className=" max-w-container mx-auto xl:flex ">
            <div className=" xl:w-[30%] bg-[#F40404]">
                 <h3 className='font-popps font-bold text-[24px] xl:text-[36px] text-white xl:pl-[74px] xl:pt-[85px] py-[60px] pl-1 '>
                    Learn more about our company       
                </h3> 
            </div>
            <div className=" xl:w-[70%] bg-Learn pt-[168px] pb-[142px] text-center items-center bg-no-repeat bg-center bg-cover ">
                <a className=' py-[14px] px-[30px] bg-[#FFFFFF] font-popps font-semibold text-[16px] text-[#F40404] ' href="#">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Learn