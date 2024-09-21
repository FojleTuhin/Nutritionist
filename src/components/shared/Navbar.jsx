import React from 'react';
import ball from "../../../public/cricket.ball.fill.svg"
import icon from "../../../public/Icon.svg"
import abstractLeft from "../../../public/Abstract Design left.svg"
import abstractRight from "../../../public/Abstract Design right.svg"
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='mobile:h-[94px] mobile:px-4 mobile:pt-10 pb-[14px] medium:h-[68px] medium:py-[14px] medium:px-[80px] bg-[#1A3129] text-[#FFFFFF] border-b-[1px] border-0 border-b-[#234338] relative overflow-hidden'>
            <div className='h-[40px] rounded-[6px] border-[1px] py-[10px] mobile:px-1  bg-[#234338] leading-tight border-[#2C5446] relative z-30'>
                <div className='flex justify-center '>

                    <Image
                        src={ball}
                        alt="Picture of the ball"
                    />
                    <p className='mobile:ml-1 mobile:mr-2 medium:ml-[6px] medium:mr-[14px] font-medium mobile:text-[14px]'>Join Our Personalized Nutrition Demo For Free</p>
                    <Image
                        src={icon}
                        alt="Picture of the ball"
                    />


                </div>



                <div className='flex justify-between medium:absolute medium:top-0 mobile:bottom-0 medium:w-full medium:px-10 mobile:hidden medium:flex'>
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

            <Image
                className='bottom-0 absolute -left-10 medium:hidden'
                src={abstractLeft}
                alt="Picture of the ball"
            />
            <Image
                className='bottom-0 absolute -right-10 medium:hidden '
                src={abstractRight}
                alt="Picture of the ball"
            />



        </div>
    );
};

export default Navbar;