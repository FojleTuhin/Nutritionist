import JoinOurTeam from '@/components/teamPage/JoinOurTeam';
import ManagementTeams from '@/components/teamPage/ManagementTeams';
import TeamExpert from '@/components/teamPage/TeamExpert';
import React from 'react';

const page = () => {
    return (
        <div className='px-4 tablet:px-10 medium:px-[60px]  laptop:px-20 pt-20 '>
            <TeamExpert heading='Meet Our Team of Experts' subHeading='Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.' />
            <ManagementTeams />
            <JoinOurTeam />
        </div>
    );
};

export default page;