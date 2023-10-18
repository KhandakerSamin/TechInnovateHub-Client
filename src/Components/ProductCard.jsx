/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ singleProduct }) => {
    
    console.log(singleProduct);
    return (
        <div className="card bg-red-50 w-[400px] h-[500px]">
            <img className="w-[400px] rounded-t-lg h-[300px]" src={singleProduct.photo} alt="" />
            <h1>Product Name : {singleProduct.name}</h1>
            <div className="">
                <h1 className="pr-15">Price : {singleProduct.price}</h1>
                <h1 className="pl-15">Category : {singleProduct.category}</h1>
                <h1>Brand : {singleProduct.brand}</h1>
                <h1>Rating : {singleProduct.rating}</h1>
            </div>
            <div className="flex justify-between items-center">
            <Link to={`/productDetails/${singleProduct._id}`}>
                    <button className="btn">Details</button>

                </Link>
                <Link to={`/updateProduct/${singleProduct._id}`}>  
                <button className="btn">Update </button>
        
                </Link>
        </div>
        </div>
    );
};

export default ProductCard;