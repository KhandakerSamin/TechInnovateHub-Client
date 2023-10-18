/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const CartCard = ({ product, setProducts, products }) => {


    // console.log(product);

    const { _id, name, category, photo, price, rating, description, brand } = product

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cartProducts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
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
            <div className="flex w-full rounded-t-xl bg-red-200 items-center">
                <div className="w-1/3">
                    <img className="w-[200px] rounded-l-xl rounded-b-none h-[150px]" src={photo} alt="" />
                </div>
                <div className="w-2/3">
                    <h1 className="text-xl font-semibold mb-2">Name : {name}</h1>
                    <h1 className="text-xl font-semibold mb-2">Brand : {brand}</h1>
                    <h1 className="text-xl font-semibold mb-2">Price : {price} BDT</h1>
                    <h1 className="text-xl font-semibold mb-2">Category : {category}</h1>
                </div>
            </div>
            <button onClick={() => handleDelete(_id)} className="btn btn-primary rounded-none rounded-b-xl">Remove from the Cart</button>
        </div>
    );
};

export default CartCard;