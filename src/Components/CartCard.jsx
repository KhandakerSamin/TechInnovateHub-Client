/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const CartCard = ({ product, setProducts, products }) => {


    // console.log(product);

    const { _id, name, category, photo, price, rating, description, brand } = product

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "This product will romove from the cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tech-innovate-hub-server-38w6zw1rj.vercel.app/cartProducts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed from Cart!',
                                'Your Product has been Removed.',
                                'success'
                            )
                            const remaining = products.filter(item => item._id != _id);
                            setProducts(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="card ">
            <div className="flex w-full rounded-t-xl bg-[#F0ECCF] items-center">
                <div className="w-1/3 ">
                    <img className="w-[300px] rounded-ss-xl h-[200px]" src={photo} alt="" />
                </div>
                <div className="w-2/3 pl-10">
                    <h1 className="text-xl font-semibold mb-2">Name : {name}</h1>
                    <h1 className="text-xl font-semibold mb-2">Brand : {brand}</h1>
                    <h1 className="text-xl font-semibold mb-2">Price : {price} BDT</h1>
                    <h1 className="text-xl font-semibold mb-2">Category : {category}</h1>
                </div>
            </div>
            <button onClick={() => handleDelete(_id)} className="btn btn-primary hover:bg-[#fab105] border-none bg-[#bb800a]   rounded-none normal-case  font-bold text-lg rounded-b-xl">Remove from the Cart</button>
        </div>
    );
};

export default CartCard;