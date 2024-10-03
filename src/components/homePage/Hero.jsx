import Image from 'next/image';
import React from 'react';
import img from '../../../public/hero banner.png'
import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'
import 'animate.css';



const Hero = () => {
    return (
        <div className=' medium:flex'>
            <div className=' medium:w-[50%]'>
                <Image
                    className='w-full bg-cover rounded-b-[50px] medium:rounded-b-none'
                    src={img}
                    alt='hero image'
                />

            </div>
            <div className='flex-1 laptop:pl-10 medium:pl-7 laptop:pr-20 medium:pr-14 pt-7 medium:pt-0  flex flex-col justify-center -mt-[72px] tablet:-mt-[90px] medium:-mt-0'>

                <div className=' flex medium:flex-col flex-col-reverse p-4 tablet:p-10 medium:p-0 items-center medium:items-start laptop:gap-[50px] medium:gap-[40px] gap-[30px]'>
                    <div className='flex flex-col laptop:gap-10 gap-5 items-center medium:items-start'>
                        <div className='text-center medium:text-left'>
                            <span className='text-[#1A3129] font-semibold text-[18px] md:text-[22px] py-2 border-0 border-b-[3px] border-[#CBEA7B] animate__animated animate__fadeInRight'>Transform Your ❤️ Health with</span>
                            <p className='text-[#1A3129] laptop:text-[48px] medium:text-[44px] text-[38px] font-bold mt-[10px] mb-4 animate__animated animate__fadeInRight'>Personalized Nutrition Coaching</p>
                            <p className='text-[#333333] font-medium'>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
                        </div>
                        <div className='flex gap-[14px]'>
                            <p className='py-[14px] px-4 bg-[#CBEA7B] rounded-[6px] text-[#262626] text-[14px] font-semibold'>Get Starter Today</p>
                            <p className='py-[14px] px-5 bg-[#F6FBE9] rounded-[6px] text-[#262626] text-[14px] font-semibold border-[#E5F5BD] border-[1px]'>Book a Demo</p>

                        </div>

                    </div>
                    <div className='medium:flex gap-[6px] items-center '>
                        <div className='w-[102px] h-[52px] flex rounded-[58px] border-[1px] border-[#CBEA7B] bg-[#FAFDF2] py-[6px] px-2 mx-auto'>
                            <Image
                                className='h-10 w-10 rounded-full'
                                src={img1}
                                alt='hero image'
                            />
                            <Image
                                className='h-10 w-10 rounded-full -ml-[17px]'
                                src={img2}
                                alt='hero image'
                            />
                            <Image
                                className='h-10 w-10 rounded-full -ml-[17px]'
                                src={img3}
                                alt='hero image'
                            />
                        </div>
                        <div>
                            <p className='text-[#234338] font-semibold text-[18px]'><span className='text-[#468671]'>430+</span> Happy Customers</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Hero;