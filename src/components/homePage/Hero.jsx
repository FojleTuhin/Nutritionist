import Image from 'next/image';
import React from 'react';
import img from '../../../public/hero banner.png'

const Hero = () => {
    return (
        <div className='flex'>
            <div className=''>
                <Image
                    src={img}
                    alt='hero image'
                />

            </div>
            <div className='flex-1 pl-10 pr-20  flex flex-col justify-center'>

                <div className='h-[471px] flex flex-col gap-[50px]'>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <span className='text-[#1A3129] font-semibold text-[22px] py-2 border-0 border-b-[3px] border-[#CBEA7B] mb-[10px]'>Transform Your ❤️ Health with</span>
                            <p className='text-[#1A3129] text-[48px] font-bold mb-4'>Personalized Nutrition Coaching</p>
                            <p className='text-[#333333] font-medium'>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
                        </div>
                        <div className='flex gap-[14px]'>
                            <p className='py-[14px] px-4 bg-[#CBEA7B] rounded-[6px] text-[#262626] text-[14px] font-semibold'>Get Starter Today</p>
                            <p className='py-[14px] px-5 bg-[#F6FBE9] rounded-[6px] text-[#262626] text-[14px] font-semibold border-[#E5F5BD] border-[1px]'>Get Starter Today</p>

                        </div>

                    </div>
                    <div>
                        <p>hello</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Hero;