import Image from 'next/image';
import React from 'react';
import flower from "../../../public/flag.2.crossed.fill.svg";
import basket from "../../../public/basket.fill.svg";
import wallet from "../../../public/wallet.pass.fill.svg";
import fork from "../../../public/fork.knife.svg";
import headphone from "../../../public/airpodsmax.svg";
import bolt from "../../../public/bolt.shield.fill.svg";
import backpack from "../../../public/pin.fill.svg";
import cap from "../../../public/graduationcap.fill.svg";
import cup from "../../../public/cup.and.saucer.fill.svg";
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
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
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
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>02</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={basket}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Assessing Your Needs</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>03</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={wallet}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Personalized Nutrition Plan</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>04</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={fork}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Meal Planning and Recipes</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>05</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={headphone}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Ongoing Support</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you ..</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>06</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={bolt}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Progress Tracking</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture .</p>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>07</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={backpack}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Regular Check-ins</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired .</p>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>08</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={cap}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Education and Resources</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle...</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>09</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={backpack}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Fine-Tuning and Adjustments</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs..</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='relative h-[325px] tablet:h-[320px] medium:h-[360px]'>
                    <p className='text-[#468671] text-[80px] medium:text-[100px] font-bold '>10</p>
                    <div className=' absolute bottom-5 tablet:bottom-0 laptop:bottom-10'>
                        <div className="p-[20px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px]">
                            <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                                <div className="p-[14px] h-[54px] w-[54px] flex justify-center items-center bg-[#CBEA7B] rounded-[6px]">
                                    <Image
                                        src={cup}
                                        alt="flower image"
                                    />
                                </div>
                                <p className="font-semibold text-[18px] medium:text-[20px]">Sustainable Lifestyle Habits</p>
                            </div>
                            <div>
                                <p className="text-[#333333] text-[14px] medium:text-[16px] font-medium">Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed .</p>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HowItWorks;