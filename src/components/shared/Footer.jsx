import Image from 'next/image';
import React from 'react';
import logo from "../../../public/logo.svg"
import Link from 'next/link';
import { FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div>
            <div className='mt-[100px] medium:px-[80px] medium:py-[40px] px-4 py-[30px]  border-0 border-t-[1px] bg-[#1A3129] border-[#262626] flex flex-col gap-[40px] '>
                <div>
                    <div className='flex justify-between items-center'>
                        <Link href='/'>
                            <div className='flex items-center text-[#FFFFFF] gap-2 font-bold'>
                                <Image
                                    src={logo}
                                    alt='logo'
                                />
                                <p>Nutritionist</p>
                            </div>
                        </Link>
                        <div className='hidden medium:block'>
                            <div className='flex gap-4 text-[#FFFFFF] text-[14px] font-semibold'>
                                <Link href="/" className=" hover:underline underline-offset-4" prefetch={false}>
                                    Home
                                </Link>
                                <Link href="/about" className=" hover:underline underline-offset-4" prefetch={false}>
                                    About
                                </Link>
                                <Link href="/team" className=" hover:underline underline-offset-4" prefetch={false}>
                                    Team
                                </Link>
                                <Link href="/process" className=" hover:underline underline-offset-4" prefetch={false}>
                                    Process
                                </Link>
                                <Link href="/pricing" className=" hover:underline underline-offset-4" prefetch={false}>
                                    Pricing
                                </Link>
                                <Link href="/blog" className=" hover:underline underline-offset-4" prefetch={false}>
                                    Blog
                                </Link>
                                <Link href="/contact" className=" hover:underline underline-offset-4" prefetch={false}>
                                    Contact
                                </Link>

                            </div>
                        </div>
                        <div className='text-[#FFFFFF] text-[16px] font-semibold flex items-center gap-5'>
                            <p>Got To Top</p>
                            <p className='p-[14px] bg-[#234338] rounded-full '><Link href="#"><FaArrowUp /></Link></p>


                        </div>

                    </div>
                    <div className='medium:hidden'>
                        <div className='flex flex-wrap mt-5 gap-4 text-[#FFFFFF] text-[14px] font-semibold'>
                            <Link href="/" className=" hover:underline underline-offset-4" prefetch={false}>
                                Home
                            </Link>
                            <Link href="/about" className=" hover:underline underline-offset-4" prefetch={false}>
                                About
                            </Link>
                            <Link href="/team" className=" hover:underline underline-offset-4" prefetch={false}>
                                Team
                            </Link>
                            <Link href="/process" className=" hover:underline underline-offset-4" prefetch={false}>
                                Process
                            </Link>
                            <Link href="/pricing" className=" hover:underline underline-offset-4" prefetch={false}>
                                Pricing
                            </Link>
                            <Link href="/blog" className=" hover:underline underline-offset-4" prefetch={false}>
                                Blog
                            </Link>
                            <Link href="/contact" className=" hover:underline underline-offset-4" prefetch={false}>
                                Contact
                            </Link>

                        </div>
                    </div>


                </div>

                <div className=' rounded-[8px] border-[1px] border-[#2C5446] bg-[#234338] medium:py-[14px] medium:pl-4 medium:pr-[26px] p-5 flex flex-col medium:flex-row justify-between gap-5'>
                    <div className='font-medium text-[16px] text-[#FFFFFF] flex flex-col medium:flex-row gap-4 '>
                        <div className='p-3 flex items-center gap-1 border-[1px] border-[#2C5446] justify-center'>
                            <MdEmail className='text-[#CBEA7B] h-5 w-5' />
                            <p>hello@squareup.com</p>
                        </div>
                        <div className='p-3 flex items-center gap-1 border-[1px] border-[#2C5446] justify-center'>
                            <FaPhoneAlt className='text-[#CBEA7B] h-5 w-5' />
                            <p>+91 91813 23 2309</p>
                        </div>
                        <div className='p-3 flex items-center gap-1 border-[1px] border-[#2C5446] justify-center'>
                            <MdLocationPin className='text-[#CBEA7B] h-5 w-5' />
                            <p>Somewhere in the World</p>
                        </div>


                    </div>
                    <div className='p-3 flex items-center gap-1 text-[14px] justify-center medium:border-[1px] text-[#F2F2F2] border-[#2C5446]'>
                        <RiCopyrightLine className=' h-5 w-5' />
                        <p>2023 Nutritionist. All rights reserved.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;