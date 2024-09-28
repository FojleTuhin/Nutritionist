import React from 'react';

const Table = () => {
    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] p-[50px] ">
            <table>
                <thead>
                    <tr >
                        <th className='px-6 py-4 rounded-[8px] bg-[#234338] text-[#FFFFFF] font-medium text-[20px]'>Features</th>
                        <th className='px-6 py-4 rounded-[8px] bg-[#234338] text-[#FFFFFF] font-medium text-[20px]'>Free Plan</th>
                        <th className='px-6 py-4 rounded-[8px] bg-[#234338] text-[#FFFFFF] font-medium text-[20px]'>Free Plan</th>
                        <th className='px-6 py-4 rounded-[8px] bg-[#234338] text-[#FFFFFF] font-medium text-[20px]'>Free Plan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Personalized Nutrition Plan</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default Table;