import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationPin } from "react-icons/md";

const ContactOption = () => {
    return (
        <div className='p-5 flex flex-col md:flex-row medium:px-[105px] gap-5 bg-[#1A3129] rounded-b-[12px]'>
            <div className='md:w-[336px]  rounded-[6px] border-[1px] p-5 medium:p-6 bg-[#234338] border-[#2C5446] flex flex-col gap-[14px] medium:gap-4 items-center'>
                <MdEmail className='text-[#CBEA7B] h-[26px] w-[26px]' />
                <p className='text-[#FFFFFF] text-[14px] medium:text-[16px] font-medium'>support@nutritionist.com</p>
            </div>
            <div className='md:w-[336px]  rounded-[6px] border-[1px] p-5 medium:p-6 bg-[#234338] border-[#2C5446] flex flex-col gap-[14px] medium:gap-4 items-center'>
                <FaPhoneAlt className='text-[#CBEA7B] h-[26px] w-[26px]' />
                <p className='text-[#FFFFFF] text-[14px] medium:text-[16px] font-medium'>+91 00000 00000</p>
            </div>
            <div className='md:w-[336px]  rounded-[6px] border-[1px] p-5 medium:p-6 bg-[#234338] border-[#2C5446] flex flex-col gap-[14px] medium:gap-4 items-center'>
                <MdLocationPin className='text-[#CBEA7B] h-[26px] w-[26px]' />
                <p className='text-[#FFFFFF] text-[14px] medium:text-[16px] font-medium'>Some Where in the World</p>
            </div>

        </div>
    );
};

export default ContactOption;