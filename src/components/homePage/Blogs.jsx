import Image from 'next/image';
import image1 from '../../../public/Image1.png'
import image2 from '../../../public/Image2.png'
import image3 from '../../../public/Image3.png'
import image4 from '../../../public/Image4.png'
import img5 from '../../../public/Image5.png'
import love from '../../../public/love.svg'
import save from '../../../public/save.svg'

const Blogs = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] font-bold text-center">Our Blogs</p>
            <p className="text-[#333333] tablet:w-[60%] mx-auto text-[14px] medium:text-[16px] font-medium text-center mb-[50px]">Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog..</p>
            <div className="p-6 medium:px-[30px] w-[358px] h-[572px] mx-auto bg-[#F6FBE9] border-[1px] border-[#EEF8D3] rounded-[10px]">
                <div className=' rounded-[10px]'>
                    <Image

                        src={image1}
                        alt='image one'
                    />
                </div>
                <div>
                    <p className='text-[#333333] text-[14px] font-medium mt-5'>Weight Loss</p>
                    <p className='text-[#262626] text-[20px] font-semibold'>The Benefits of Hydration for Weight Loss</p>
                    <p className='my-[18px] text-[#4C4C4D] font-medium text-[14px]'>Discover how staying hydrated can support your weight loss goals and improve overall health.</p>

                    <div className='p-4 border-[1px] border-[#EEF8D3] h-[145px] bg-[#FAFDF2] rounded-[10px]'>
                        <div className='flex gap-[10px] items-center mb-5'>
                            <Image
                                className='rounded-[6px] h-10 w-10'
                                src={img5}
                                alt='image'
                            />
                            <div className=''>
                                <p className='text-[#1A3129] font-semibold'>Emily Johnson</p>
                                <p className='text-[#59595A] font-medium text-[14px]'>23 May 2023 - 5 min read</p>
                            </div>


                        </div>
                        <div className='flex gap-[10px] justify-end'>
                            <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                <Image 
                                src={love}
                                alt='love'/>
                            </div>
                            <div className='p-[14px] rounded-[6px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9]'>
                                <Image 
                                src={save}
                                alt='save'/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blogs;