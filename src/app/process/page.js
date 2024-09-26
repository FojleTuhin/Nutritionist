import HowItWorks from '@/components/processPage/HowItWorks';
import TeamExpert from '@/components/teamPage/TeamExpert';
import React from 'react';

const page = () => {
    return (
        <div className='px-4 tablet:px-10 medium:px-[60px]  laptop:px-20 pt-20 '>
            <TeamExpert heading='Your Journey to Health and Wellness' subHeading='At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here is a detailed breakdown of our process' />


            <HowItWorks/>
        </div>
    );
};

export default page;