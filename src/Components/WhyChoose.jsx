
const WhyChoose = () => {
    return (
        <section className="lg:px-[250px] mx-[30px] md:mx-0 pb-28">
            <p className='text-center mb-3 font-serif'>TechInnovateHub</p>
            <h1 className='text-5xl mb-12 text-center'>Why Choose Us</h1>
            <div className='flex flex-col w-full lg:flex-row items-center justify-center gap-x-14 p-3'>
                <div className='md:col-span-2 md:w-1/2 flex-shrink'>
                    <div className="collapse w-full collapse-arrow mb-4 bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title bg-[#F0ECCF] text-xl font-medium">
                        Unbeatable Selection
                        </div>
                        <div className="collapse-content bg-[#F0ECCF]">
                            <p>Explore the widest range of mobile phones, from the latest flagships to budget-friendly options. Our commitment to diversity ensures you find the perfect device to match your style and needs.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow mb-4 bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title bg-[#F0ECCF] text-xl font-medium">
                        Top-Notch Quality
                        </div>
                        <div className="collapse-content bg-[#F0ECCF]">
                            <p>We prioritize quality above all else. Every mobile phone we offer undergoes rigorous testing to guarantee top-notch performance and durability. Rest easy knowing you're investing in a device built to last.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow mb-4 bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title bg-[#F0ECCF] text-xl font-medium">
                        Expert Customer Support
                        </div>
                        <div className="collapse-content bg-[#F0ECCF]">
                            <p> Have a question or need assistance? Our dedicated customer support team is ready to help you. We're here to guide you through the buying process and provide post-purchase support to ensure your satisfaction.</p>
                        </div>
                    </div>
                    <div className="collapse  collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title bg-[#F0ECCF] text-xl font-medium">
                        Competitive Pricing & Deals
                        </div>
                        <div className="collapse-content bg-[#F0ECCF]">
                            <p> At our mobile phone store, we offer competitive pricing and exclusive deals to make your purchase affordable. Don't miss out on limited-time offers and discounts that help you get the best value for your money.</p>
                        </div>
                    </div>
                </div>
                <div className='ml-10 md:w-1/2 flex items-center justify-center'>
                    <img className='w-[300px] mb-3' src={'https://i.postimg.cc/85sXL7Cy/images.png'} alt="" />
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;