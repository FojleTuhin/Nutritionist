import Image from 'next/image';
import image1 from '../../../public/Image1.png'
import image2 from '../../../public/Image2.png'
import image3 from '../../../public/Image3.png'
import image4 from '../../../public/Image4.png'
import img5 from '../../../public/Image5.png'
import img6 from '../../../public/Image6.png'
import img7 from '../../../public/Image7.png'
import img8 from '../../../public/Image8.png'
import love from '../../../public/love.svg'
import save from '../../../public/save.svg'

const Blogs = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] laptop:text-[48px] font-bold text-center">Our Blogs</p>
            <p className="text-[#333333] tablet:w-[60%] mx-auto text-[14px] medium:text-[16px] laptop:text-[18px] font-medium text-center mb-[50px] medium:mb-[60px]">Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog..</p>
            <div className='grid grid-cols-2 gap-5 justify-center'>

                {/* card 1 */}
                <div className="p-6   bg-[#F6FBE9] border-[1px] border-[#EEF8D3] rounded-[10px] ">
                    <div className=' rounded-[10px]'>
                        <Image

                            src={image1}
                            alt='image one'
                        />
                    </div>
                    <div>
                        <p className='text-[#333333] text-[14px] laptop:text-[16px] font-laptop mt-5 laptop:mt-10'>Weight Loss</p>
                        <p className='text-[#262626] text-[20px] laptop:text-[22px] font-semibold'>The Benefits of Hydration for Weight Loss</p>
                        <p className='my-[18px]  text-[#4C4C4D] font-laptop text-[14px] laptop:text-[16px]'>Discover how staying hydrated can support your weight loss goals and improve overall health.</p>

                        <div className='p-4 border-[1px] border-[#EEF8D3]  bg-[#FAFDF2] rounded-[10px] laptop:flex gap-5 justify-between'>
                            <div className='flex gap-[10px] items-center mb-5 laptop:mb-0'>
                                <Image
                                    className='rounded-[6px] h-10 w-10 laptop:h-[50px] laptop:w-[50px]'
                                    src={img5}
                                    alt='image'
                                />
                                <div className=''>
                                    <p className='text-[#1A3129] font-semibold laptop:text-[18px]'>Emily Johnson</p>
                                    <p className='text-[#59595A] font-laptop text-[14px] laptop:text-[16px]'>23 May 2023 - 5 min read</p>
                                </div>


                            </div>
                            <div className='flex gap-[10px] justify-end'>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={love}
                                        alt='love' />
                                </div>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={save}
                                        alt='save' />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* card 2 */}
                <div className="p-6   bg-[#F6FBE9] border-[1px] border-[#EEF8D3] rounded-[10px] ">
                    <div className=' rounded-[10px]'>
                        <Image

                            src={image2}
                            alt='image one'
                        />
                    </div>
                    <div>
                        <p className='text-[#333333] text-[14px] laptop:text-[16px] font-laptop mt-5 laptop:mt-10'>Mindful Eating</p>
                        <p className='text-[#262626] text-[20px] laptop:text-[22px] font-semibold'>Cultivating a Healthy Relationship with Food</p>
                        <p className='my-[18px]  text-[#4C4C4D] font-laptop text-[14px] laptop:text-[16px]'>Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.</p>

                        <div className='p-4 border-[1px] border-[#EEF8D3]  bg-[#FAFDF2] rounded-[10px] laptop:flex gap-5 justify-between'>
                            <div className='flex gap-[10px] items-center mb-5 laptop:mb-0'>
                                <Image
                                    className='rounded-[6px] h-10 w-10 laptop:h-[50px] laptop:w-[50px]'
                                    src={img6}
                                    alt='image'
                                />
                                <div className=''>
                                    <p className='text-[#1A3129] font-semibold laptop:text-[18px]'>Sarah Thompson</p>
                                    <p className='text-[#59595A] font-laptop text-[14px] laptop:text-[16px]'>23 May 2023 - 5 min read</p>
                                </div>


                            </div>
                            <div className='flex gap-[10px] justify-end'>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={love}
                                        alt='love' />
                                </div>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={save}
                                        alt='save' />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                {/* card 3 */}
                <div className="p-6   bg-[#F6FBE9] border-[1px] border-[#EEF8D3] rounded-[10px] ">
                    <div className=' rounded-[10px]'>
                        <Image

                            src={image3}
                            alt='image one'
                        />
                    </div>
                    <div>
                        <p className='text-[#333333] text-[14px] laptop:text-[16px] font-laptop mt-5 laptop:mt-10'>Understanding Macronutrients</p>
                        <p className='text-[#262626] text-[20px] laptop:text-[22px] font-semibold'>Carbohydrates, Proteins, and Fats</p>
                        <p className='my-[18px]  text-[#4C4C4D] font-laptop text-[14px] laptop:text-[16px]'>Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.</p>

                        <div className='p-4 border-[1px] border-[#EEF8D3]  bg-[#FAFDF2] rounded-[10px] laptop:flex gap-5 justify-between'>
                            <div className='flex gap-[10px] items-center mb-5 laptop:mb-0'>
                                <Image
                                    className='rounded-[6px] h-10 w-10 laptop:h-[50px] laptop:w-[50px]'
                                    src={img7}
                                    alt='image'
                                />
                                <div className=''>
                                    <p className='text-[#1A3129] font-semibold laptop:text-[18px]'>Mark Wilson</p>
                                    <p className='text-[#59595A] font-laptop text-[14px] laptop:text-[16px]'>23 May 2023 - 5 min read</p>
                                </div>


                            </div>
                            <div className='flex gap-[10px] justify-end'>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={love}
                                        alt='love' />
                                </div>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={save}
                                        alt='save' />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* card 4 */}
                <div className="p-6   bg-[#F6FBE9] border-[1px] border-[#EEF8D3] rounded-[10px] ">
                    <div className=' rounded-[10px]'>
                        <Image

                            src={image4}
                            alt='image one'
                        />
                    </div>
                    <div>
                        <p className='text-[#333333] text-[14px] laptop:text-[16px] font-laptop mt-5 laptop:mt-10'>Healthy Snacks on the Go</p>
                        <p className='text-[#262626] text-[20px] laptop:text-[22px] font-semibold'>Quick and Nutritious Options</p>
                        <p className='my-[18px]  text-[#4C4C4D] font-laptop text-[14px] laptop:text-[16px]'>Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day..</p>

                        <div className='p-4 border-[1px] border-[#EEF8D3]  bg-[#FAFDF2] rounded-[10px] laptop:flex gap-5 justify-between'>
                            <div className='flex gap-[10px] items-center mb-5 laptop:mb-0'>
                                <Image
                                    className='rounded-[6px] h-10 w-10 laptop:h-[50px] laptop:w-[50px]'
                                    src={img8}
                                    alt='image'
                                />
                                <div className=''>
                                    <p className='text-[#1A3129] font-semibold laptop:text-[18px]'>Emily Johnson</p>
                                    <p className='text-[#59595A] font-laptop text-[14px] laptop:text-[16px]'>23 May 2023 - 5 min read</p>
                                </div>


                            </div>
                            <div className='flex gap-[10px] justify-end'>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={love}
                                        alt='love' />
                                </div>
                                <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                    <Image
                                        className='h-5 w-5'
                                        src={save}
                                        alt='save' />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Blogs;