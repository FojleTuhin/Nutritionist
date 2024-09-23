import Image from 'next/image';
import React from 'react';
import flower from "../../../public/flower.svg";
import img2 from '../../../public/graduationcap.fill.svg'
import img3 from '../../../public/fork.knife.svg'
import img4 from '../../../public/wallet.pass.fill.svg'
import right from '../../../public/right.svg'
import bottom from '../../../public/bottom.svg'




const Achivement = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] laptop:text-[48px] font-bold text-center">Company Achievements</p>
            <p className="text-[#333333] text-[14px] medium:text-[16px] laptop:text-[18px] font-medium text-center mb-[50px] medium:mb-[60px]">At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements</p>


            <div className="grid tablet:grid-cols-2 gap-5 mt-[50px] laptop:mt-[100px]">
                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={flower}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px] medium:text-[20px]">10,000+ Transformations</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.</p>
                    </div>

                </div>


                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img2}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px] medium:text-[20px]">Recognition for Excellence</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success..</p>
                    </div>

                </div>


                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img3}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px] medium:text-[20px]">Positive Client Reviews</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program..</p>
                    </div>

                </div>


                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img4}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px] medium:text-[20px]">Collaborate With Top Health Experts.</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.</p>
                    </div>

                </div>


            </div>


            <div className='mt-[50px]  laptop:mt-[100px] medium:p-[60px] p-10  bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px] relative overflow-hidden'>
                <div className='tablet:flex gap-[150px]'>
                    <div>
                        <p className='font-semibold text-[#262626] medium:text-[26px] text-[22px] mb-[10px]'>We Are Proud of Our Achievements</p>
                        <p className='font-medium text-[#333333]'>But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist  today and embark on your own transformative journey towards optimal health and well-being.</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='bg-[#CBEA7B] tablet:w-[128px] mt-5 tablet:mt-0 w-full text-center font-semibold text-[14px]  py-[14px] px-5 rounded-[6px]'>Book A Demo</p>
                    </div>
                </div>
                <Image
                className='absolute top-0 -left-4 '
                    src={right}
                    alt='logo' />
                <Image
                className='absolute bottom-0 -right-4 '
                    src={bottom}
                    alt='logo' />

            </div>

        </div>
    );
};

export default Achivement;