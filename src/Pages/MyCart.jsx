import { useLoaderData } from "react-router-dom";
import CartCard from "../Components/cartCard";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext, useState } from "react";


const MyCart = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);
    console.log(user.displayName);

    const loadedProducts = useLoaderData();

    const [products, setProducts] = useState(loadedProducts)

    return (
        <div className="my-16 mb-24 px-3 md:px-[70px]">
            <h1 className="text-2xl text-center mb-2 font-bold mt-2">{user.displayName}, your choosen porducts here :</h1>
            <h1 className="text-lg text-center font-semibold mb-7">Your Email : {user.email}</h1>
            <h1 className="text-2xl text-left px-5 font-bold my-10">Total Products In Your Cart : {products.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-5">
                {
                    products.map( product => <CartCard key={product._id} product={product} setProducts={setProducts} products={products}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;