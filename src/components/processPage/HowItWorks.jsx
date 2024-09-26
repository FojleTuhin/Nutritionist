import Image from 'next/image';
import React from 'react';
import flower from "../../../public/flag.2.crossed.fill.svg";
const HowItWorks = () => {
    return (
        <div className='mt-[50px] medium:mt-[80px] laptop:mt-[100px]'>
            <div className='text-center medium:w-[55%] mx-auto'>
                <p className='text-[#262626] text-[28px] font-bold'>How It Works</p>
                <p className='text-[#333333] text-[14px] font-medium mt-1'>We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works</p>
            </div>
            <div className='mt-[50px] medium:mt-[80px] laptop:mt-[100px] grid tablet:grid-cols-2 gap-5 tablet:[30px] laptop:gap-10'>
                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>01</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-14'>
                        <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={flower}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Personalized Nutrition Plans</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>01</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-14'>
                        <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={flower}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Personalized Nutrition Plans</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.</p>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HowItWorks;