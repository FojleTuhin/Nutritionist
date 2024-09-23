import Image from 'next/image';
import React from 'react';
import topBanner from "../../../public/topbanner.png";

const TopBanner = () => {
    return (
        <div className=" px-4 tablet:px-10 medium:px-[60px] laptop:px-20 pt-[30px] tablet:pt-[50px] laptop:pt-20">
            <Image
                src={topBanner}
                alt='topBanner Iamge' />


            <div className='mt-[50px] medium:mt-[70px] laptop:mt-20 p-[30px] medium:p-[50px] laptop:p-20 bg-[#F6FBE9] border-[1px] border-[#E5F5BD] '>

                <p className='text-[#262626] text-[28px] medium:text-[38px] font-semibold text-center mb-5 medium:mb-10'>Welcome to Nutritionist</p>
                <div className='text-center font-medium text-[#333333]'>
                    <p>Your trusted source for personalized nutrition coaching. Our mission is to help you achieve your weight loss and health goals through tailored nutrition plans and expert guidance. We understand that every individual is unique, and that's why we believe in providing personalized solutions that fit your lifestyle and preferences.</p>
                    <p>
                    With our team of qualified nutritionists and dietitians, we are dedicated to empowering you with the knowledge and tools you need to make lasting changes. Whether you want to shed those extra pounds, improve your overall well-being, or develop a healthier relationship with food, we are here to support you every step of the way.</p>
                    <p>At Nutritionist, we believe that healthy eating should be enjoyable and sustainable. We emphasize the importance of balanced nutrition, focusing on whole foods and mindful eating practices. Our approach is rooted in scientific research and evidence-based strategies, ensuring that you receive the most up-to-date and accurate information.</p>
                    <p>
                    Join our community of individuals committed to transforming their lives through nutrition. Take control of your health, boost your energy levels, and discover the joy of nourishing your body with wholesome foods. We are here to guide you towards a healthier, happier you.</p>
                </div>

            </div>
        </div>
    );
};

export default TopBanner;