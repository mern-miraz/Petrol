import React from 'react'

const Service = () => {
  return (
    <section>
        <div className="xl:flex xl:flex-wrap">
            <div className=" xl:w-1/2 xl:pt-[120px] xl:pl-[390px] px-[20px] mt-6 xl:mt-0 ">
                <h3 className="font-popps font-bold text-[24px] xl:text-[64px] text-[#000000] ">
                    Our Services
                </h3>
                <p className="font-popps font-medium text-[16px] text-[#6C6C6C] xl:pr-[160px] ">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
            <div className="xl:w-1/2 bg-Service1 xl:pt-[152px] xl:pb-[145px] py-[100px] bg-center bg-no-repeat bg-cover relative after:absolute after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:bg-[#00000080] z-[1] after:z-[-1] xl:pl-[116px] text-center xl:text-start mt-5 xl:mt-0 ">
                <h3 className='font-popps font-bold text-[24px] xl:text-[36px] text-white pb-[30px] '>Modern natural oil and gas refineries.</h3>
                <a className=' py-[14px] px-[30px] bg-[#F40404] font-popps font-semibold text-[16px] text-white' href="#">Learn More</a>
            </div>
            <div className=" xl:w-1/2 bg-Service2 xl:pt-[147px] xl:pb-[139px] py-[100px] bg-center bg-no-repeat bg-cover relative after:absolute after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:bg-[#00000080] z-[1] after:z-[-1] xl:pl-[116px] text-center xl:text-start mt-3 xl:mt-0 ">
            <h3 className='font-popps font-bold text-[24px] xl:text-[36px] text-white pb-[30px] '>Supply of national industries.</h3>
                <a className=' py-[14px] px-[30px] bg-[#F40404] font-popps font-semibold text-[16px] text-white' href="#">Learn More</a>
            </div>
            <div className=" xl:w-1/2 bg-Service3 xl:pt-[147px] xl:pb-[139px] py-[100px] bg-center bg-no-repeat bg-cover relative after:absolute after:content-[''] after:left-0 after:top-0 after:h-full after:w-full after:bg-[#00000080] z-[1] after:z-[-1] xl:pl-[116px] text-center xl:text-start mt-3 xl:mt-0">
            <h3 className='font-popps font-bold text-[24px] xl:text-[36px] text-white pb-[30px] '>National fuel distribution and supply.</h3>
                <a className=' py-[14px] px-[30px] bg-[#F40404] font-popps font-semibold text-[16px] text-white' href="#">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Service