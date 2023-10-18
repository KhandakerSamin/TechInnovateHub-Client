import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BrandCard from "../Components/BrandCard";

const Home = () => {

    const brands = useLoaderData()
    console.log(brands);

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center font-bold text-5xl my-20">Ours Brands And Supports</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-10 ">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard> )
                }
            </div>
        </div>
    );
};

export default Home;