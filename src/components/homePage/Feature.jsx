import Image from "next/image";
import flower from "../../../public/flower.svg";
import img2 from '../../../public/graduationcap.fill.svg'
import img3 from '../../../public/fork.knife.svg'
import img4 from '../../../public/wallet.pass.fill.svg'
import img5 from '../../../public/dumbbell.fill.svg'
import img6 from '../../../public/backpack.fill.svg'

const Feature = () => {
    return (
        <div className="mt-[50px] px-4 tablet:px-10 medium:px-[60px] laptop:px-20">
            <p className="text-[#262626] text-[28px] font-bold text-center">Features</p>
            <p className="text-[#333333] text-[14px] font-medium text-center mb-[50px]">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>


            <div className="grid tablet:grid-cols-2 gap-5">
                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] ">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
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


                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] ">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img2}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px]">Guidance from Certified Nutritionists</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] font-medium">Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.</p>
                    </div>

                </div>


                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] ">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img3}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px]">Food Tracking and Analysis</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] font-medium">Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations..</p>
                    </div>

                </div>


                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] ">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img4}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px]">Meal Planning and Recipes</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] font-medium">Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals..</p>
                    </div>

                </div>
                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] ">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img5}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px]">Lifestyle and Behavior Coaching</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] font-medium">Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way..</p>
                    </div>

                </div>
                <div className="p-[30px] medium:p-[40px] bg-[#F6FBE9] border-[1px] border-[#E5F5BD] ">
                    <div className="flex gap-[10px] items-center mb-4 medium:mb-5">
                        <div className="p-3 bg-[#CBEA7B] rounded-[6px]">
                            <Image
                                src={img6}
                                alt="flower image"
                            />
                        </div>
                        <p className="font-semibold text-[18px]">Nutritional Education and Workshops</p>
                    </div>
                    <div>
                        <p className="text-[#333333] text-[14px] font-medium">Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success..</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Feature;