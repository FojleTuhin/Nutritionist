import Image from 'next/image';
import React from 'react';
import img12 from "../../../public/Image12.png"
import img13 from "../../../public/Image13.png"
import img14 from "../../../public/Image14.png"
import img15 from "../../../public/15.png"
import img16 from "../../../public/16.png"
import img17 from "../../../public/17.png"
import img18 from "../../../public/18.png"
import img21 from "../../../public/21.png"
import img19 from "../../../public/19.png"
import img20 from "../../../public/20.png"

const OurStory = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] laptop:text-[48px] font-bold text-center">Our Story</p>
            <p className="text-[#333333] text-[14px] medium:text-[16px] laptop:text-[18px] font-medium text-center mb-[50px] medium:mb-[60px]">Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey..
            </p>



            <div>

                {/* 1st 2nd row */}
                <div>
                    <div className='laptop:flex  laptop:w-full mobTab:w-[634px]  mx-auto'>
                        <Image
                            className='medium:w-[644px] bg-contain w-full'
                            src={img12}
                            alt='image 12' />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] '>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Inspiring Transformations Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.</p>

                                <p className='text-[#333333] font-semibold'>July 1, 2025</p>

                            </div>
                        </div>

                    </div>



                    <div className='laptop:flex laptop:flex-row-reverse  laptop:w-full tablet:w-[634px]  mx-auto'>
                        <Image

                            src={img13}
                            alt='image 12'
                        />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] text-right'>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Recognition and Accolades Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field..</p>

                                <p className='text-[#333333] font-semibold'>March 10, 2023</p>

                            </div>
                        </div>

                    </div>
                </div>


                {/* 3rd 4th row */}
                <div>
                    <div className='laptop:flex  laptop:w-full mobTab:w-[634px]  mx-auto'>
                        <Image
                            className='medium:w-[644px] bg-contain w-full'
                            src={img14}
                            alt='image 12' />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] '>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Continued Growth Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people..</p>

                                <p className='text-[#333333] font-semibold'>November 2, 2021</p>

                            </div>
                        </div>

                    </div>



                    <div className='laptop:flex laptop:flex-row-reverse  laptop:w-full tablet:w-[634px]  mx-auto'>
                        <Image

                            src={img15}
                            alt='image 12'
                        />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] text-right'>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Collaborating for Success Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients...</p>

                                <p className='text-[#333333] font-semibold'>July 15, 2019</p>

                            </div>
                        </div>

                    </div>
                </div>


                {/* 5th 6th row  */}
                <div>
                    <div className='laptop:flex  laptop:w-full mobTab:w-[634px]  mx-auto'>
                        <Image
                            className='medium:w-[644px] bg-contain w-full'
                            src={img16}
                            alt='image 12' />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] '>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Enhanced Support Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients...</p>

                                <p className='text-[#333333] font-semibold'>April 1, 2018</p>

                            </div>
                        </div>

                    </div>



                    <div className='laptop:flex laptop:flex-row-reverse  laptop:w-full tablet:w-[634px]  mx-auto'>
                        <Image

                            src={img21}
                            alt='image 12'
                        />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] text-right'>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Innovating for Clients Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.</p>

                                <p className='text-[#333333] font-semibold'>January 20, 2017</p>

                            </div>
                        </div>

                    </div>
                </div>


                {/* 7th 8th row  */}
                <div>
                    <div className='laptop:flex  laptop:w-full mobTab:w-[634px]  mx-auto'>
                        <Image
                            className='medium:w-[644px] bg-contain w-full'
                            src={img17}
                            alt='image 12' />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] '>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Celebrating Success Stories</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services..</p>

                                <p className='text-[#333333] font-semibold'>September 5, 2015</p>

                            </div>
                        </div>

                    </div>



                    <div className='laptop:flex laptop:flex-row-reverse  laptop:w-full tablet:w-[634px]  mx-auto'>
                        <Image

                            src={img18}
                            alt='image 12'
                        />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] text-right'>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Expanding Reach Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base..</p>

                                <p className='text-[#333333] font-semibold'>June 10, 2014</p>

                            </div>
                        </div>

                    </div>
                </div>



                {/* 9th 10th row  */}
                <div>
                    <div className='laptop:flex  laptop:w-full mobTab:w-[634px]  mx-auto'>
                        <Image
                            className='medium:w-[644px] bg-contain w-full'
                            src={img19}
                            alt='image 12' />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] '>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>Research and Expertise Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching..</p>

                                <p className='text-[#333333] font-semibold'>March 15, 2012</p>

                            </div>
                        </div>

                    </div>



                    <div className='laptop:flex laptop:flex-row-reverse  laptop:w-full tablet:w-[634px]  mx-auto'>
                        <Image

                            src={img20}
                            alt='image 12'
                        />
                        <div className='laptop:w-3 w-auto h-[11px] laptop:h-auto  bg-[#CBEA7B]'></div>
                        <div className='flex-1 items-center flex'>
                            <div className=' laptop:p-[60px] p-[30px] text-right'>
                                <span className=' border-0 border-b-[3px] border-[#CBEA7B] py-2 text-[20px] medium:text-[24px] font-semibold'>The Inception Story</span>
                                <p className='laptop:my-[30px] my-5 font-medium text-[14px] medium:text-[16px] text-[#333333]'>On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist..</p>

                                <p className='text-[#333333] font-semibold'>January 1, 2010</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;