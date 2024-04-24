import React from 'react'
import { FaAngleRight } from "react-icons/fa";


const Blog = () => {
  return (
    <section className=' xl:py-[110px] py-[50px] bg-[#F0F0F0] '>
        <div className=" max-w-container mx-auto xl:flex xl:justify-between ">
            <div className=" xl:w-[31%] bg-Blog1 bg-center bg-no-repeat bg-cover pt-[90px] pb-[70px] pl-[46px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:bg-[#00000098] z-[1] after:z-[-1] ">
                <h3 className='font-popps font-bold text-[24px] text-white xl:pr-[150px] pb-[60px] '>
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </h3>
                <a className=' py-[10px] px-[23px] bg-[#ffffff50] font-popps font-semibold text-[12px] text-white ' href="#">Read more</a>
            </div>
            <div className=" xl:w-[31%] bg-Blog2 bg-center bg-no-repeat bg-cover pt-[90px] pb-[70px] pl-[46px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:bg-[#00000090] z-[1] after:z-[-1] mt-3 xl:mt-0 ">
            <h3 className='font-popps font-bold text-[24px] text-white xl:pr-[150px] pb-[60px] '>
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </h3>
                <a className=' py-[10px] px-[23px] bg-[#ffffff50] font-popps font-semibold text-[12px] text-white ' href="#">Read more</a>
            </div>
            <div className=" xl:w-[31%] bg-Blog3 bg-center bg-no-repeat bg-cover pt-[90px] pb-[70px] pl-[46px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:bg-[#00000090] z-[1] after:z-[-1] mt-3 xl:mt-0 ">
            <h3 className='font-popps font-bold text-[24px] text-white xl:pr-[150px] pb-[60px] '>
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </h3>
                <a className=' py-[10px] px-[23px] bg-[#ffffff50] font-popps font-semibold text-[12px] text-white ' href="#">Read more</a>
            </div>
        </div>
        <div className=" max-w-container mx-auto mt-8 ">
        <div className=" flex items-center justify-end">
            <a className=' font-popps font-bold text-[16px] text-[#000000] ' href="#">MORE FROM THE BLLOG</a>
            < FaAngleRight className='font-popps font-bold text-[24px]' />
        </div>
        </div>
    </section>
  )
}

export default Blog