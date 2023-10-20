/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ singleProduct }) => {
    // Calculate the number of full stars and half stars based on the rating value
    const rating = singleProduct.rating;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 === 0.5;

    return (
        <div className="card bg-[#F0ECCF] w-[400px] h-[520px]">
            <div className="w-[400px] h-[400px] flex justify-center items-center">
                <img className="w-[350px] rounded-xl bg-slate-100 h-[280px]" src={singleProduct.photo} alt="" />
            </div>
            <h1 className="font-bold text-2xl mx-auto mb-3">{singleProduct.name}</h1>
            <div className="flex items-center mx-10 justify-between">
                <h1 className="font-bold text-lg">$ {singleProduct.price} BDT</h1>
                <h1 className="font-bold text-lg">Type: {singleProduct.category}</h1>
            </div>
            <div className="flex items-center mx-10 justify-between">
                <h1 className="font-bold text-lg">Brand: {singleProduct.brand}</h1>
                <div className="rating rating-sm">
                    {Array(fullStars).fill().map((_, index) => (
                        <input key={index} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2" />
                    ))}
                    {hasHalfStar && (
                        <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    )}
                </div>
            </div>
            <div className="flex items-end justify-between mx-10 mt-4 mb-7">
                <Link to={`/productDetails/${singleProduct._id}`}>
                    <button className="btn btn-primary hover:bg-[#fab105] border-none bg-[#bb800a]">Details</button>
                </Link>
                <Link to={`/updateProduct/${singleProduct._id}`}>
                    <button className="btn btn-primary hover:bg-[#fab105] border-none bg-[#bb800a]">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
