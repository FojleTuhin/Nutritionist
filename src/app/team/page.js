import ManagementTeams from '@/components/teamPage/ManagementTeams';
import TeamExpert from '@/components/teamPage/TeamExpert';
import React from 'react';

const page = () => {
    return (
        <div className='px-4 tablet:px-10 medium:px-[60px]  laptop:px-20 pt-20 '>
            <TeamExpert/>
            <ManagementTeams/>
        </div>
    );
};

export default page;