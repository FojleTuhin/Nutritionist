import Image from 'next/image';
import image1 from '../../../public/Image1.png'
import image2 from '../../../public/Image2.png'
import image3 from '../../../public/Image3.png'
import image4 from '../../../public/Image4.png'
const Blogs = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] font-bold text-center">Our Blogs</p>
            <p className="text-[#333333] tablet:w-[60%] mx-auto text-[14px] medium:text-[16px] font-medium text-center mb-[50px]">Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog..</p>
            <div className="px-6 medium:px-[30px] bg-[#F6FBE9] border-[1px] border-[#EEF8D3] rounded-[10px]">
                <div className=' rounded-[10px]'>
                    <Image
                    
                        src={image1}
                        alt='image one'
                    />
                </div>
                <div>
                    <p className='text-[#333333] text-[14px] font-medium mt-5'>Understanding Macronutrients</p>
                    <p className='text-[#262626] text-[20px] font-semibold'>Carbohydrates, Proteins, and Fats</p>

                </div>

            </div>
        </div>
    );
};

export default Blogs;