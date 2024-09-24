import Image from 'next/image';
import React from 'react';
import right from '../../../public/right.svg'
import bottom from '../../../public/bottom.svg'
const JoinOurTeam = () => {
    return (
        <div>
            <div className='mt-[50px]  laptop:mt-[100px] medium:p-[60px] p-10  bg-[#F6FBE9] border-[1px] border-[#E5F5BD] rounded-[10px] relative overflow-hidden'>
                <div className='tablet:flex gap-[150px]'>
                    <div>
                        <p className='font-semibold text-[#262626] medium:text-[26px] text-[22px] mb-[10px]'>Join Our Team</p>
                        <p className='font-medium text-[#333333]'>We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='bg-[#CBEA7B] tablet:w-[128px] mt-5 tablet:mt-0 w-full text-center font-semibold text-[14px]  py-[14px] px-5 rounded-[6px]'>Apply Now</p>
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

export default JoinOurTeam;