import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTriggerManagement } from "@/components/ui/tabs"
const ManagementTeams = () => {
    return (
        <div>
            <div className='bg-[#234338] p-5 medium:py-5 medium:px-20 rounded-b-[10px] text-[#FFFFFF] font-semibold flex gap-5 medium:justify-between items-center overflow-auto overflow-x-scroll whitespace-nowrap scrollbar-hide'>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Management Team</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Nutritionists and Dietitians</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Customer Support</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Marketing and Communications</p>
                <p className='hover:py-3 hover:px-[18px] hover:bg-[#2C5446] hover:border-[1px] hover:border-[#356554] hover:rounded-[6px]'>Technology and Development</p>
            </div>


            <div>

                <Tabs defaultValue="Management Team" className='flex flex-col items-center mt-10'>
                    <TabsList className=" w-full h-[96px] bg-[#234338] p-5 medium:py-5 medium:px-20 rounded-b-[10px] rounded-t-none flex gap-5 justify-between  overflow-auto overflow-x-scroll whitespace-nowrap scrollbar-hide ">
                        <TabsTriggerManagement value="Management Team" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Management Team</TabsTriggerManagement>
                        <TabsTriggerManagement value="Nutritionists and Dietitians" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Nutritionists and Dietitians</TabsTriggerManagement>
                        <TabsTriggerManagement value="Customer Support" className="py-3 px-[18px] whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold">Customer Support</TabsTriggerManagement>
                        <TabsTriggerManagement value="Marketing and Communications" className="py-3 whitespace-nowrap px-[18px] text-[16px] text-[#FFFFFF] font-semibold">Marketing and Communications</TabsTriggerManagement>
                        <TabsTriggerManagement value="Technology and Development" className="py-3 whitespace-nowrap px-[18px] text-[16px] text-[#FFFFFF] font-semibold">Technology and Development</TabsTriggerManagement>
                    </TabsList>


                    <TabsContent value="Management Team">management Team</TabsContent>
                    <TabsContent value="Nutritionists and Dietitians">Nutritionists and Dietitians</TabsContent>
                    <TabsContent value="Customer Support">Customer Support</TabsContent>
                    <TabsContent value="Marketing and Communications">Marketing and Communications</TabsContent>
                    <TabsContent value="Technology and Development">Technology and Development</TabsContent>
                </Tabs>


                


            </div>
        </div>
    );
};

export default ManagementTeams;