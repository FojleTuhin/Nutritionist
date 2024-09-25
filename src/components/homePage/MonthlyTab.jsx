import React from 'react';

const MonthlyTab = () => {
    return (
        <div className='flex flex-wrap justify-center gap-[20px]'>

            {/* Basic Plan */}
            <div className='w-[358px] laptop:w-[413px] laptop:p-10 p-[20px] rounded-[10px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9] flex flex-col gap-6'>
                <div>
                    <p className='text-[22px] laptop:text-[24px] font-semibold text-[#262626]'>Basic Plan</p>
                    <p className='text-[14px] laptop:text-[16px] font-medium text-[#4C4C4D]'>Up to 50% off on Yearly Plan</p>
                </div>
                <p className='text-[#262626] text-[14px] laptop:text-[16px] font-medium'>Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.</p>
                <p><span className='text-[#2C5446] font-bold text-[40px] laptop:text-[42px]'>$49</span> <span className='text-[#333333] font-medium'>/month</span></p>
                <p className='py-[14px] px-6 bg-[#CBEA7B] text-center text-[14px] laptop:text-[16px] font-semibold rounded-[6px] text-[#262626]'>Choose Plan</p>
            </div>


            {/* Premium Plan */}
            <div className='w-[358px] laptop:w-[413px] laptop:p-10 p-[20px] rounded-[10px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9] flex flex-col gap-6'>
                <div>
                    <p className='text-[22px] laptop:text-[24px] font-semibold text-[#262626]'>Premium Plan</p>
                    <p className='text-[14px] laptop:text-[16px] font-medium text-[#4C4C4D]'>Up to 50% off on Yearly Plan</p>
                </div>
                <p className='text-[#262626] text-[14px] laptop:text-[16px] font-medium'>Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations..</p>
                <p><span className='text-[#2C5446] font-bold text-[40px] laptop:text-[42px]'>$79</span> <span className='text-[#333333] font-medium'>/month</span></p>
                <p className='py-[14px] px-6 bg-[#CBEA7B] text-center text-[14px] laptop:text-[16px] font-semibold rounded-[6px] text-[#262626]'>Choose Plan</p>
            </div>


            {/* Ultimate Plan */}
            <div className='w-[358px] laptop:w-[413px] laptop:p-10 p-[20px] rounded-[10px] border-[1px] border-[#EEF8D3] bg-[#F6FBE9] flex flex-col gap-6'>
                <div>
                    <p className='text-[22px] laptop:text-[24px] font-semibold text-[#262626]'>Ultimate Plan</p>
                    <p className='text-[14px] laptop:text-[16px] font-medium text-[#4C4C4D]'>Up to 50% off on Yearly Plan</p>
                </div>
                <p className='text-[#262626] text-[14px] laptop:text-[16px] font-medium'>Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and  workshops...</p>
                <p><span className='text-[#2C5446] font-bold text-[40px] laptop:text-[42px]'>$99</span> <span className='text-[#333333] font-medium'>/month</span></p>
                <p className='py-[14px] px-6 bg-[#CBEA7B] text-center text-[14px] laptop:text-[16px] font-semibold rounded-[6px] text-[#262626]'>Choose Plan</p>
            </div>





        </div>
    );
};

export default MonthlyTab;