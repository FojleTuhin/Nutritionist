import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTriggerManagement } from "@/components/ui/tabs"
import TeamOne from './TeamOne';
import TeamTwo from './TeamTwo';
import TeamThree from './TeamThree';
import TeamFour from './TeamFour';
import TeamFive from './TeamFive';
const ManagementTeams = () => {
    return (
        <div>
           


            <div className=" ">

                <Tabs defaultValue="Management Team" className='flex flex-col items-center'>
                    <TabsList className=" w-full h-[96px] bg-[#234338] p-5 medium:py-5 medium:px-20 rounded-b-[10px] rounded-t-none flex gap-5 justify-between  overflow-auto overflow-x-scroll whitespace-nowrap scrollbar-hide mb-[50px]">
                        <TabsTriggerManagement value="Management Team" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Management Team</TabsTriggerManagement>
                        <TabsTriggerManagement value="Nutritionists and Dietitians" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Nutritionists and Dietitians</TabsTriggerManagement>
                        <TabsTriggerManagement value="Customer Support" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Customer Support</TabsTriggerManagement>
                        <TabsTriggerManagement value="Marketing and Communications" className="py-3 whitespace-nowrap px-[18px] text-[16px] text-[#FFFFFF] font-semibold">Marketing and Communications</TabsTriggerManagement>
                        <TabsTriggerManagement value="Technology and Development" className="py-3 whitespace-nowrap px-[18px] text-[16px] text-[#FFFFFF] font-semibold">Technology and Development</TabsTriggerManagement>
                    </TabsList>


                    <TabsContent value="Management Team"><TeamOne/></TabsContent>
                    <TabsContent value="Nutritionists and Dietitians"><TeamTwo/></TabsContent>
                    <TabsContent value="Customer Support"><TeamThree/></TabsContent>
                    <TabsContent value="Marketing and Communications"><TeamFour/></TabsContent>
                    <TabsContent value="Technology and Development"><TeamFive/></TabsContent>
                </Tabs>


                


            </div>
        </div>
    );
};

export default ManagementTeams;