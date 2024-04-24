import React from 'react'
import Item1 from "../assets/gal1.png"
import Item2 from "../assets/gal2.png"
import Item3 from "../assets/gal3.png"
import Item4 from "../assets/gal4.png"

const Gallery = () => {
  return (
    <section id=''>
    <div className=" flex justify-between flex-wrap pb-3">
        <div className=" xl:w-[24%] w-[49%] ">
            <img className='w-full' src={Item1} alt="gal1" />
        </div>
        <div className=" xl:w-[24%] w-[49%]">
            <img className='w-full' src={Item2} alt="gal1" />
        </div>
        <div className=" xl:w-[24%] w-[49%] pt-3 xl:pt-0">
            <img className='w-full' src={Item3} alt="gal1" />
        </div>
        <div className=" xl:w-[24%] w-[49%] pt-3 xl:pt-0">
            <img className='w-full' src={Item4} alt="gal1" />
        </div>
    </div>
    </section>
  )
}

export default Gallery