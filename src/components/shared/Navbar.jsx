import React from 'react';
import ball from "../../../public/cricket.ball.fill.svg"
import icon from "../../../public/Icon.svg"
import abstractLeft from "../../../public/Abstract Design left.svg"
import abstractRight from "../../../public/Abstract Design right.svg"
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='mobile:h-[94px] mobile:px-4 mobile:pt-10 pb-[14px] laptop:h-[68px] laptop:py-[14px] laptop:px-[80px] bg-[#1A3129] text-[#FFFFFF] border-b-[1px] border-0 border-b-[#234338]'>
            <div className='h-[40px] rounded-[6px] border-[1px] py-[10px] mobile:px-2  bg-[#234338] leading-tight border-[#2C5446] relative'>
                <div className='flex justify-center '>

                    <Image
                        src={ball}
                        alt="Picture of the ball"
                    />
                    <p className='mobile:ml-1 mobile:mr-3 laptop:ml-[6px] laptop:mr-[14px] font-medium mobile:text-[14px]'>Join Our Personalized Nutrition Demo For Free</p>
                    <Image
                        src={icon}
                        alt="Picture of the ball"
                    />


                </div>

                <div className='flex justify-between laptop:absolute laptop:top-0 w-full laptop:px-10 mobile:hidden laptop:block'>
                    <Image
                        src={abstractLeft}
                        alt="Picture of the ball"
                    />
                    <Image
                        src={abstractRight}
                        alt="Picture of the ball"
                    />

                </div>

            </div>
        </div>
    );
};

export default Navbar;