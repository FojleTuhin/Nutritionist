
import Image from "next/image";
import testimonial from "../../../public/testimonial.svg"
import img9 from "../../../public/Image9.png"


const Testimonial = () => {



    return (
        <div className="mt-[50px] medium:mt-20 laptop:mt-[100px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] medium:text-[38px] font-bold text-center">Our Testimonials</p>
            <p className="text-[#333333] tablet:w-[60%] mx-auto text-[14px] medium:text-[16px] font-medium text-center mb-[50px]">Our satisfied clients share their success stories and experiences on their journey to better health and well-being...</p>



            {/* card */}
            <div>
                <div className="p-6 rounded-t-[16px] w-[358px] border-[1px] border-[#EEF8D3] border-b-0 bg-[#FAFDF2]">
                    <Image

                        src={testimonial}
                        alt="testimonial" />

                    <p className="mt-10 text-[#333333] font-medium text-[14px] ">I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!</p>

                </div>
                <div className="py-[18px] px-6 rounded-b-[16px] w-[358px] border-[1px] border-[#EEF8D3] border-b-0 bg-[#F6FBE9] flex gap-[10px] items-center">
                    <Image
                        className="w-10 h-10"
                        src={img9}
                        alt="image" />

                    <p className="text-[#1A3129] font-semibold">Jennifer Anderson</p>
                </div>

            </div>

            






        </div>
    );
};

export default Testimonial;