import ContactOption from '@/components/contactPage/ContactOption';
import TeamExpert from '@/components/teamPage/TeamExpert';
import Image from 'next/image';
import React from 'react';
import right from '../../../public/right.svg'
import bottom from '../../../public/bottom.svg'

const page = () => {
    return (
        <div>
            <div className='px-4 tablet:px-10 medium:px-[60px]  laptop:px-20 pt-20 '>
                <TeamExpert heading='Contact Us' subHeading='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please dont hesitate to reach out to us using any of the following contact methods' />

                <ContactOption />




                <div className='mt-[50px]  laptop:mt-[100px] medium:p-[60px] p-10  bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px] relative overflow-hidden'>
                    <div className='tablet:flex gap-[150px]'>
                        <div>
                            <p className='font-semibold text-[#262626] medium:text-[26px] text-[22px] mb-[10px]'>Are you ready to embark on a transformative journey towards better health and wellness?</p>
                            <p className='font-medium text-[#333333]'>Join us at Nutritionist and let us guide you on the path to a healthier and happier you.</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='bg-[#CBEA7B] tablet:w-[128px] mt-5 tablet:mt-0 w-full text-center font-semibold text-[14px]  py-[14px] px-5 rounded-[6px]'>Join Us Now</p>
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
        </div>
    );
};

export default page;