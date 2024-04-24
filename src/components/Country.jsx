import React from 'react'

const Country = () => {
  return (
    <section className=' pt-[78px] pb-[100px] '>
        <div className=" max-w-container mx-auto xl:flex items-center px-4 ">
        <div className="xl:w-2/5 ">
            <h3 className=' font-popps font-bold xl:text-[48px] text-[#000000] leading-[72px] xl:pr-[200px] '>
                The biggest supplier on the country
            </h3>
        </div>
            <div className="xl:w-3/5">
                <p className="font-popps font-medium xl:text-[16px] text-[#6C6C6C] xl:pr-[150px] items-center">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Country