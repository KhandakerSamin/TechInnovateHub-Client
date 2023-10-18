import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const details = useLoaderData()
    console.log(details);

    useEffect(() => {
        const d = details?.find(item => item._id == id);
        setInfo(d);
    }, [details, id]);

    console.log(info);
    return (
        <div>
            <h1>Product details Of : {info.name} </h1>
            <img src={info.photo} alt="" />
            <p>Description : {info.description} </p>
        </div>
    );
};

export default ProductDetails;