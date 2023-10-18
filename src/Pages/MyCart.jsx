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
        <div>
            <h1 className="text-2xl text-center mb-2 mt-7">{user.displayName}, your choosen porducts here :</h1>
            <h1 className="text-lg text-center mb-7">{user.email}</h1>
            <h1>My carts :{products.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
                {
                    products.map( product => <CartCard key={product._id} product={product} setProducts={setProducts} products={products}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;