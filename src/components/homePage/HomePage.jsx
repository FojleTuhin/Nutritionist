import React from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Blogs from './Blogs';
import Pricing from './Pricing';
// import Testimonial from './Testimonial';

const HomePage = () => {
    return (
        <div>
           <Hero/>
           <Feature/>
           <Blogs/>
           {/* <Testimonial/> */}
           <Pricing/>
        </div>
    );
};

export default HomePage;