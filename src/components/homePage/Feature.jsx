import Image from "next/image";
import flower from "../../../public/flower.svg"

const Feature = () => {
    return (
        <div className="mt-[50px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] font-bold text-center">Features</p>
            <p className="text-[#333333] text-[14px] font-medium text-center mb-[50px]">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>


            <div className="w-full tablet:w-[50%] p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] mb-20">
                <div className="flex gap-[10px] items-center mb-4">
                    <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                        <Image
                            src={flower}
                            alt="flower image"
                        />
                    </div>
                    <p className="font-semibold text-[18px]">Personalized Nutrition Plans</p>
                </div>
                <div>
                    <p className="text-[#333333] text-[14px] font-medium">Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.</p>
                </div>

            </div>
        </div>
    );
};

export default Feature;