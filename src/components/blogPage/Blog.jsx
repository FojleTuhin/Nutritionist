import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTriggerManagement } from "@/components/ui/tabs"


const Blog = () => {
    return (
        <div>
            <div className=" ">

                <Tabs defaultValue="All" className='flex flex-col items-center'>
                    <TabsList className=" w-full h-[96px] bg-[#234338] p-5 medium:py-5 medium:px-20 rounded-b-[10px] rounded-t-none flex gap-5 justify-between  overflow-auto overflow-x-scroll whitespace-nowrap scrollbar-hide mb-[50px]">
                        <TabsTriggerManagement value="All" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">All</TabsTriggerManagement>
                        <TabsTriggerManagement value="Weight Loss Tips" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Weight Loss Tips</TabsTriggerManagement>
                        <TabsTriggerManagement value="Healthy Eating" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Healthy Eating</TabsTriggerManagement>
                        <TabsTriggerManagement value="Fitness and Exercise" className="py-3 whitespace-nowrap px-[18px] text-[16px] text-[#FFFFFF] font-semibold">Fitness and Exercise</TabsTriggerManagement>
                        <TabsTriggerManagement value="Mindset and Motivation" className="py-3 whitespace-nowrap px-[18px] text-[16px] text-[#FFFFFF] font-semibold">Mindset and Motivation</TabsTriggerManagement>
                        <TabsTriggerManagement value="Recipes and Meal Planning" className="py-3 whitespace-nowrap px-[18px] text-[16px] text-[#FFFFFF] font-semibold">Recipes and Meal Planning</TabsTriggerManagement>
                    </TabsList>


                    <TabsContent value="All">ONE</TabsContent>
                    <TabsContent value="Weight Loss Tips">TWO</TabsContent>
                    <TabsContent value="Healthy Eating">THREE</TabsContent>
                    <TabsContent value="Fitness and Exercise">FOUR</TabsContent>
                    <TabsContent value="Mindset and Motivation">FIVE</TabsContent>
                    <TabsContent value="Recipes and Meal Planning">FIVE</TabsContent>
                </Tabs>





            </div>
        </div>
    );
};

export default Blog;