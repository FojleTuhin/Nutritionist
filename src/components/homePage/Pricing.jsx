import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MonthlyTab from './MonthlyTab';
import YearlyTab from './YearlyTab';


const Pricing = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] laptop:text-[48px] font-bold text-center">Our Pricing</p>
            <p className="text-[#333333] tablet:w-[60%] mx-auto text-[14px] medium:text-[16px] laptop:text-[18px] font-medium text-center mb-[50px] medium:mb-[60px]">We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources...</p>

            <div>
                <Tabs defaultValue="monthly" className='flex flex-col items-center'>
                    <TabsList className=" border-[1px] w-[207px] h-[61px] p-[10px] bg-[#FAFDF2] border-[#DCF1A7] text-[#4C4C4C]">
                        <TabsTrigger value="monthly" className="py-[10px] px-6 text-[14px] font-semibold">Monthly</TabsTrigger>
                        <TabsTrigger value="yearly" className="py-[10px] px-6 text-[14px] font-semibold">Yearly</TabsTrigger>
                    </TabsList>

                    <p className='mt-[10px] mb-10 text-[#4C4C4D] font-medium'>Save 50% on Yearly</p>

                    <TabsContent value="monthly">
                        <MonthlyTab />

                    </TabsContent>
                    <TabsContent value="yearly">
                        <YearlyTab />

                    </TabsContent>
                </Tabs>

            </div>

        </div>
    );
};

export default Pricing;