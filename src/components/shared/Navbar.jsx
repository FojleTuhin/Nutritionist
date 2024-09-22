
import React from 'react';
import ball from "../../../public/cricket.ball.fill.svg"
import icon from "../../../public/Icon.svg"
import abstractLeft from "../../../public/Abstract Design left.svg"
import abstractRight from "../../../public/Abstract Design right.svg"
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


            {/* 2nd Div  */}
            <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <span className="text-lg font-semibold">Acme Inc</span>
                </Link>
                <div className="hidden md:flex gap-4">
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Services
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Portfolio
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                        Contact
                    </Link>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="grid w-[200px] p-4">
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Home
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                About
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Services
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Portfolio
                            </Link>
                            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    );
};

export default Navbar;