import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BrandCard from "../Components/BrandCard";
import Follow from "../Components/Follow";
import WhyChoose from "../Components/WhyChoose";

const Home = () => {

    const brands = useLoaderData()
    // console.log(brands);

    return (
        <div>
            <Banner></Banner>
            <p className='text-center mb-3 font-serif mt-20'>TechInnovateHub</p>
            <h1 className='text-5xl mb-16 text-center '>Our Brands And Support</h1>
            <div className="grid mx-[60px] md:mx-0 lg:px-[230px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard> )
                }
            </div>
            <Follow></Follow>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;