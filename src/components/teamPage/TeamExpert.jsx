import React from 'react';
import RadiulPlus from './RadiulPlus';
import '../../app/globals.css'


const TeamExpert = ({ heading, subHeading }) => {
    return (
      
        <div>
            <div className='bg-[#F6FBE9]  overflow-hidden rounded-t-[10px]  p-[30px] tablet:p-10 medium:pt-[60px]  laptop:p-20 '>
                <div className='-mt-32 '>
                    <RadiulPlus />
                </div>
                <div className='-mt-20 '>
                    <p className='text-center medium:text-[38px] text-[28px] font-semibold text-[#262626]'>{heading}</p>
                    <p className='text-center text-[#333333] font-medium mt-[10px] medium:text-[16px] text-[14px]'>{subHeading}</p>
                </div>
            </div>
        








        </div>
    );
};

export default TeamExpert;