import Image from 'next/image';
import React from 'react';
import img12 from "../../../public/Image12.png"

const OurStory = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] laptop:text-[48px] font-bold text-center">Our Story</p>
            <p className="text-[#333333] text-[14px] medium:text-[16px] laptop:text-[18px] font-medium text-center mb-[50px] medium:mb-[60px]">Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey..
            </p>



            <div className='laptop:flex mt-[60px] laptop:w-full tablet:w-[634px]  mx-auto'>
                <Image
                    
                    src={img12}
                    alt='image 12' />
                <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                <div className='flex-1 items-center flex'>
                    <div className=' laptop:p-[60px] p-[30px] '>
                        <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Inspiring Transformations Story</span>
                        <p className='medium:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.</p>

                        <p className='text-[#333333] font-semibold'>July 1, 2025</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurStory;