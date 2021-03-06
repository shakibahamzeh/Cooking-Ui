import React from 'react'

const BannerCard = ({ title, image }: any) => {
    return (
        <div className="bg-green-900 m-[40px] w-[400px] h-[434px] flex flex-col justify-start items-center
         rounded-3xl p-[16px] font-inter relative">
            <p className=' w-[172px] font-lobster text-center text-white text-2xl font-normal'>{title}</p>

            <img className="absolute w-full h-full" src="images/Star-1.png" alt="" />
            <img className="z-10" src="images/recipes/food-21.png" alt="" />
            <p className='absolute font-inter bottom-2 text-white text-0.875 font-medium'>www.foodieland.com</p>
        </div>
    )
}

export default BannerCard   