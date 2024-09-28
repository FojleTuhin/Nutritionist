import Blog from '@/components/blogPage/Blog';
import TeamExpert from '@/components/teamPage/TeamExpert';
import React from 'react';

const page = () => {
    return (
        <div className='px-4 tablet:px-10 medium:px-[60px]  laptop:px-20 pt-20 '>
            <TeamExpert heading='Our Blogs' subHeading='Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.' />


            <Blog/>
        </div>
    );
};

export default page;