import React from 'react';

const Faq = () => {
    return (
        <div className='mt-[50px] medium:mt-20 laptop:mt-[100px]'>
            <p className="text-[#262626] text-[28px] medium:text-[38px] laptop:text-[48px] font-bold text-center">FAQ</p>
            <p className="text-[#333333] tablet:w-[60%] mx-auto text-[14px] medium:text-[16px] laptop:text-[18px] font-medium text-center mb-[50px] medium:mb-[60px]">We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.</p>


            <div className='w-[65%] bg-[#F6FBE9] p-[50px]'>
                <div className="collapse collapse-plus pb-[22px]  border-b-[1px] border-[#E5F5BD]">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-semibold text-[#262626] text-[18px]">What is personalized nutrition coaching?</div>
                    <div className="collapse-content">
                        <p className='text-[#333333] text-[16px] font-medium'>Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus py-[22px] border-b-[1px] border-[#E5F5BD]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-semibold text-[#262626] text-[18px]">How can nutrition coaching help me lose weight?</div>
                    <div className="collapse-content">
                        <p className='text-[#333333] text-[16px] font-medium'>Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus py-[22px] border-b-[1px] border-[#E5F5BD]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-semibold text-[#262626] text-[18px]">Can I still enjoy my favorite foods while on a nutrition plan?</div>
                    <div className="collapse-content">
                        <p className='text-[#333333] text-[16px] font-medium'>Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus py-[22px] border-b-[1px] border-[#E5F5BD]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-semibold text-[#262626] text-[18px]">How often will I have contact with my nutritionist?</div>
                    <div className="collapse-content">
                        <p className='text-[#333333] text-[16px] font-medium'>Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus py-[22px] border-b-[1px] border-[#E5F5BD]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-semibold text-[#262626] text-[18px]">How long will it take to see results?</div>
                    <div className="collapse-content">
                        <p className='text-[#333333] text-[16px] font-medium'>Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus pt-[22px] ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-semibold text-[#262626] text-[18px]">Are the meal plans and recipes provided suitable for vegetarians or vegans?</div>
                    <div className="collapse-content">
                        <p className='text-[#333333] text-[16px] font-medium'>Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;