import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MonthlyTab from './MonthlyTab';
import YearlyTab from './YearlyTab';



const PricingTab = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] ">
            
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
                       <YearlyTab/>

                    </TabsContent>
                </Tabs>

            </div>

        </div>
    );
};

export default PricingTab;