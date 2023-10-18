/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const CartCard = ({product, setProducts, products}) => {


    // console.log(product);

    const {_id, name, category, photo, price, rating, description, brand } = product

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
                fetch(`http://localhost:5000/cartProducts/${_id}` ,{
                    method:'DELETE'
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
                            const remaining = products.filter ( item => item._id != _id);
                            setProducts(remaining);
                        }
                    })
            } 
        })
    }

    return (
        <div>
            <h1>{brand}</h1>
            <h1>{name}</h1>
            <button onClick={() => handleDelete(_id)} className="btn">X</button>
        </div>
    );
};

export default CartCard;