
import React from 'react';
import ball from "../../../public/cricket.ball.fill.svg"
import icon from "../../../public/Icon.svg"
import abstractLeft from "../../../public/Abstract Design left.svg"
import abstractRight from "../../../public/Abstract Design right.svg"
import logo from "../../../public/logo.svg"
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';

const Navbar = () => {
    
    return (
        <div>

            {/* 1st Div */}
            <div className='mobile:h-[94px] mobile:px-4 mobile:pt-10 pb-[14px] medium:h-[68px] medium:py-[14px] medium:px-[80px] bg-[#1A3129] text-[#FFFFFF] border-b-[1px] border-0 border-b-[#234338] relative overflow-hidden'>
                <div className=' rounded-[6px] border-[1px] py-[10px] mobile:px-1  bg-[#234338] leading-tight border-[#2C5446] relative z-30'>
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


            {/* 2nd Div  */}
            <div className="flex items-center justify-between py-5 px-4 medium:px-20 medium:py-4 bg-[#1A3129] text-[#FFFFFF] border-b-[1px] border-0 border-b-[#EEF8D3] medium:h-[77px] mobile:h-[74px]">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Image
                        src={logo}
                        alt="Picture of the ball"
                    />
                    <span className="text-lg font-bold">Nutritionist</span>
                </Link>
                <div className="hidden medium:flex gap-5 items-center">
                    <Link href="/" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                        Home
                    </Link>
                    <Link href="/about" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="/team" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                        Team
                    </Link>
                    <Link href="#" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                        Process
                    </Link>
                    <Link href="#" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="#" className="text-[14px] ml-1 font-semibold rounded-[6px] bg-[#CBEA7B] px-4 py-3 text-[#262626] hover:underline underline-offset-4" prefetch={false}>
                        Contact Us
                    </Link>
                </div>
                <Sheet >
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden group bg-[#1A3129] border-0 hover:bg-[#EEF8D3]">
                            <MenuIcon className="h-6 w-6 text-[#EEF8D3] p-0 group-hover:text-[#1A3129]" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className='bg-[#234338] bg-opacity-40 border-none text-white'>
                        <div className="grid w-[200px] p-4 gap-5">
                            <Link href="/" className="text-[14px]  font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                                Home
                            </Link>
                            <Link href="/about" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                                About
                            </Link>
                            <Link href="/team" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                                Team
                            </Link>
                            <Link href="#" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                                Process
                            </Link>
                            <Link href="#" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                                Pricing
                            </Link>
                            <Link href="#" className="text-[14px] font-semibold rounded-[6px] hover:underline underline-offset-4" prefetch={false}>
                                Blog
                            </Link>
                            <Link href="#" className="text-[14px] font-semibold rounded-[6px] bg-[#CBEA7B] px-4 py-3 text-center text-[#262626] hover:underline underline-offset-4" prefetch={false}>
                                Contact Us
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    );
};

export default Navbar;