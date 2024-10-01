import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const Table = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] p-[50px] ">
            <div className="overflow-x-auto">
                <table className="table border-collapse w-auto">
                    {/* Table head */}
                    <thead>
                        <tr className="border-b-0 border-[#DCF1A7] text-[20px] text-[#FFFFFF] font-medium ">
                            <th className="border-r border-[#DCF1A7] pr-[30px] pl-0"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Features</p></th>
                            <th className="border-r border-[#DCF1A7] px-[30px]"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Free Plan</p></th>
                            <th className="border-r border-[#DCF1A7] px-[30px]"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Free Plan</p></th>
                            <th className='px-[30px]'><p className='bg-[#234338] py-4 px-6  rounded-[8px] '>Free Plan</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row 1 */}
                        <tr className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                            <td className="border-r py-5 border-[#DCF1A7]">Personalized Nutrition Plan</td>
                            <td className="border-r border-[#DCF1A7] mx-auto"> <span className='bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></span></td>

                            <td className="border-r border-[#DCF1A7] mx-auto"> <span className='bg-[#CBEA7B] rounded-[6px]'><MdOutlineDone className='text-[32px] p-[6px]' /></span></td>


                            

                            
                        </tr>
                        {/* Row 2 */}
                        <tr className=" border-b border-[#DCF1A7]">
                            <th className="border-r border-[#DCF1A7]">2</th>
                            <td className="border-r border-[#DCF1A7]">Hart Hagerty</td>
                            <td className="border-r border-[#DCF1A7]">Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="border-b-0 border-[#DCF1A7]">
                            <th className="border-r border-[#DCF1A7]">3</th>
                            <td className="border-r border-[#DCF1A7]">Brice Swyre</td>
                            <td className="border-r border-b-0 border-[#DCF1A7]">Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Table;