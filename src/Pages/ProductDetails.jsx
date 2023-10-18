import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const ProductDetails = () => {

    const { user } = useContext(AuthContext);

    const { id } = useParams();
    const [info, setInfo] = useState({});
    const details = useLoaderData()
    console.log(details);
    console.log(info._id);

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
        fetch(`http://localhost:5000/cartProducts`, {
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
                        text: 'Coffee Added Successfully',
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
        <div>
            <h1>Product details Of : {info.name} </h1>
            <img src={info.photo} alt="" />
            <p>Description : {info.description} </p>
            {/* <Link to={`/cart/${info._id}`}>

                </Link> */}
            <button onClick={handleAddToCart} className="btn">Add to cart</button>
        </div>
    );
};

export default ProductDetails;