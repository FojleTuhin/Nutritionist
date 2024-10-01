import React from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";

const Table = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] p-[50px] ">
            <div className="overflow-x-auto">
                <table className="table border-collapse mx-auto">
                    {/* Table head */}
                    <thead>
                        <tr className="border-b-0 border-[#DCF1A7] ">
                            <th className="border-r border-[#DCF1A7] text-[20px] text-[#FFFFFF] font-medium  pr-[30px] pl-0"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Features</p></th>
                            <th className="border-r border-[#DCF1A7] text-[20px] text-[#FFFFFF] font-medium  px-[30px]"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Free Plan</p></th>
                            <th className="border-r border-[#DCF1A7] text-[20px] text-[#FFFFFF] font-medium  px-[30px]"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Free Plan</p></th>
                            <th className='px-[30px] text-[20px] text-[#FFFFFF] font-medium '><p className='bg-[#234338] py-4 px-6  rounded-[8px] '>Free Plan</p></th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* Row 1 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Personalized Nutrition Plan</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Mobile App Access</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Email Support</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">One -on One Video Consultations</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Recipe Recommendations and Meal Planning</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2  className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 6 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Priority Support</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 7 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Educational Resources and Guides</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 8 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Advanced Progress Tracking Tools</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 9 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7] pr-16">Customized Meal Plans and Recipe Suggestions</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                        {/* Row 10 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Phone Support</td>
                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>

                            <td className="border-r border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#EEF8D3] rounded-[6px]'><RxCross2 className='text-[32px] p-[6px]' /></p></td>
                            
                            <td className="border-r-0 border-[#DCF1A7]"> <p className='mx-auto h-8 w-8 bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></p></td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Table;