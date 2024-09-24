import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/22.png'
import img2 from '../../../public/23.png'
import img3 from '../../../public/24.png'
import img4 from '../../../public/25.png'

const TeamFive = () => {
    return (
        <div className='flex gap-5 flex-wrap justify-center'>
            <div className='w-[305] relative h-[384px]'>
                <Image
                    src={img1}
                    alt='image' />

                <div className='p-5 bg-[#F6FBE9] rounded-tr-[20px] w-[245px] absolute bottom-0'>
                    <p className='font-semibold text-[20px] text-[#262626]'>Sarah Mitchell</p>
                    <p className='font-medium text-[#4C4C4D]'>Founder and CEO</p>
                </div>
            </div>
            <div className='w-[305] relative h-[384px]'>
                <Image
                    src={img2}
                    alt='image' />

                <div className='p-5 bg-[#F6FBE9] rounded-tr-[20px] w-[245px] absolute bottom-0'>
                    <p className='font-semibold text-[20px] text-[#262626]'>Emily Thompson</p>
                    <p className='font-medium text-[#4C4C4D]'>Chief Operating Officer</p>
                </div>
            </div>
            <div className='w-[305] relative h-[384px]'>
                <Image
                    src={img3}
                    alt='image' />

                <div className='p-5 bg-[#F6FBE9] rounded-tr-[20px] w-[245px] absolute bottom-0'>
                    <p className='font-semibold text-[20px] text-[#262626]'>John Davis</p>
                    <p className='font-medium text-[#4C4C4D]'>Chief Financial Officer</p>
                </div>
            </div>
            <div className='w-[305] relative h-[384px]'>
                <Image
                    src={img4}
                    alt='image' />

                <div className='p-5 bg-[#F6FBE9] rounded-tr-[20px] w-[245px] absolute bottom-0'>
                    <p className='font-semibold text-[20px] text-[#262626]'>Rachel Adams</p>
                    <p className='font-medium text-[#4C4C4D]'>Chief Marketing Officer</p>
                </div>
            </div>
        </div>
    );
};

export default TeamFive;