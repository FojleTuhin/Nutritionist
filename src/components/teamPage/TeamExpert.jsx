import React from 'react';
import RadiulPlus from './RadiulPlus';
import '../../app/globals.css'


const TeamExpert = () => {
    return (
        <div>
            <div className='bg-[#F6FBE9]  overflow-hidden rounded-t-[10px]  p-[30px] tablet:p-10 medium:pt-[60px]  laptop:p-20 '>
                <div className='-mt-32 '>
                    <RadiulPlus />
                </div>
                <div className='-mt-20 '>
                    <p className='text-center medium:text-[38px] text-[28px] font-semibold text-[#262626]'>Meet Our Team of Experts</p>
                    <p className='text-center text-[#333333] font-medium mt-[10px] medium:text-[16px] text-[14px]'>Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.</p>
                </div>
            </div>
      


            <div className='bg-[#234338] p-5 medium:py-5 medium:px-20 rounded-b-[10px] text-[#FFFFFF] font-semibold flex gap-5 medium:justify-between items-center overflow-auto overflow-x-scroll whitespace-nowrap scrollbar-hide'>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Management Team</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Nutritionists and Dietitians</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Customer Support</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Marketing and Communications</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Technology and Development</p>
            </div>


        

        </div>
    );
};

export default TeamExpert;