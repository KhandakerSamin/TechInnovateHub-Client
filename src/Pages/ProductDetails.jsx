import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const ProductDetails = () => {

    const { user } = useContext(AuthContext);

    const { id } = useParams();
    const [info, setInfo] = useState({});
    const details = useLoaderData()
    // console.log(details);
    // console.log(info._id);

    useEffect(() => {
        const d = details?.find(item => item._id == id);
        setInfo(d);
    }, [details, id]);

    const { name, category, photo, price, rating, description, brand } = info;

    const handleAddToCart = () => {
        const userName = user.displayName;
        const userEmail = user.email;
        const newCartProduct = { name, brand, category, description, price, rating, photo, userName, userEmail }
        console.log(name, category, price, rating, brand);
        fetch(`https://tech-innovate-hub-server.vercel.app/cartProducts`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Added to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'An error occurred while adding the product',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred while adding the product',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    }

    return (
        <div className="mb-24">
            <h1 className="text-2xl text-[#FBC252] text-center py-5 mt-5 font-bold">Product details Of : {info.name} </h1>
            <div className="card card-body m-10 bg-[#F0ECCF]">
                <div className="flex flex-col md:flex-row w-full gap-20">
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <img className="h-[350px]" src={info.photo} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 lg:2/3">
                        <h1 className="text-xl font-bold  mb-4 my-5">Name : {name}</h1>
                        <h1 className="text-xl font-bold  mb-4 " >Brand : {brand}</h1>
                        <h1 className="text-xl font-bold  mb-4 ">Price : {price}</h1>
                        <h1 className="text-xl font-bold  mb-4 ">Category : {category}</h1>
                        <h1 className="text-xl font-bold  mb-4 ">Rating : {rating}</h1>
                        <p className="text-xl font-bold  mb-4 ">Description : {description} </p>
                    </div>
                </div>
                <Link className="flex justify-center py-10" to=''>
                    <button onClick={handleAddToCart} className="btn bg-[#FBC252] border-none hover:bg-[#feb82a] text-black normal-case font-bold btn-primary w-[300px]">Add to cart</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;