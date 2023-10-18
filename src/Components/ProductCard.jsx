/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ singleProduct }) => {

    console.log(singleProduct);
    return (
        <div className="card bg-red-50 w-[400px] h-[500px]">
            <img className="w-[400px] bg-slate-100 rounded-t-lg h-[300px]" src={singleProduct.photo} alt="" />
            <h1 className="text-lg ml-10 mt-5 mb-2 font-bold">Product Name :  {singleProduct.name}</h1>
            <div className="flex items-center gap-x-5  ">
                <h1 className="pr-15 text-lg font-bold ml-10">Price : {singleProduct.price} Tk</h1>
                <h1 className="pl-[5px] text-lg font-bold">Category : {singleProduct.category}</h1>
            </div>
            <div className="flex items-center gap-x-10 ">
                <h1 className="text-lg ml-10 font-bold">Brand : {singleProduct.brand}</h1>
                <h1 className="text-lg ml-[14px] font-bold">Rating : {singleProduct.rating}</h1>
            </div>
            <div className="flex justify-center gap-x-36 pb-10 py-5 items-center">
                <Link to={`/productDetails/${singleProduct._id}`}>
                    <button className="btn btn-primary">Details</button>
                </Link>
                <Link to={`/updateProduct/${singleProduct._id}`}>
                    <button className="btn btn-primary">Update </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;