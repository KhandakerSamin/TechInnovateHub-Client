import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();
    console.log(product);
    const {name, brand , category,_id, description,price, rating, photo} = product;
    const handleUpdateProduct = e => {

        
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        // const newBrand = {  brand, photo }
        const updatedProduct = { name, brand, category: type, description, price,  rating, photo }
        console.log(updatedProduct);
        
        fetch(`http://localhost:5000/updateProduct/${_id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                }else if(data.modifiedCount == 0){
                    Swal.fire({
                        title: 'All Updated!',
                        text: 'Please Change Anything to Update',
                        icon: 'error',
                        confirmButtonText: 'Confirm'
                    })
                }
            })
        
    }

    return (
        <div className="relative my-16 ">
            <div className=" flex justify-center items-center  h-full" >

                <div className='w-2/3 h-5/6 rounded-md bg-[#F0ECCF]'>
                    <h1 className='text-4xl mt-12 mb-5 text-[#374151] text-center font-bold'>Update A Product</h1>
                    <div className='mx-14'>
                        <div className=''>
                            <form onSubmit={handleUpdateProduct} className='my-8'>
                                <div className='flex flex-col md:flex-row gap-x-10'>
                                    <div className='w-full md:w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" defaultValue={name} placeholder="Product Name" name='name' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <select name="brand" defaultValue={brand} className="select w-full border-none select-bordered">
                                            <option disabled selected>Select Brand Name</option>
                                            <option>Apple</option>
                                            <option>Google</option>
                                            <option>Samsung</option>
                                            <option>Sony</option>
                                            <option>Xiaomi</option>
                                            <option>OnePlus</option>
                                        </select>
                                        <label className="label">
                                            <span className="label-text">Product Type</span>
                                        </label>
                                        <select name="type" defaultValue={category} className="select w-full border-none select-bordered">
                                            <option disabled selected>Select Product Type</option>
                                            <option>Phone</option>
                                            <option>Tablet</option>
                                            <option>Laptop</option>
                                            <option>Camera</option>
                                            <option>Headphone</option>
                                            <option>Watch</option>
                                        </select>
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Product Price </span>
                                        </label>
                                        <input type="text" defaultValue={price} placeholder="Product Price" name='price' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Sort Description</span>
                                        </label>
                                        <input type="text" defaultValue={description} placeholder="Sort Description" name='description' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Product Raiting</span>
                                        </label>
                                        <select name="rating" defaultValue={rating} className="select w-full   border-none select-bordered">
                                            <option disabled selected>Select Rating Point</option>
                                            <option>5.0</option>
                                            <option>4.5</option>
                                            <option>4.0</option>
                                            <option>3.5</option>
                                            <option>3.0</option>
                                            <option>2.5</option>
                                            <option>2.0</option>
                                            <option>1.5</option>
                                            <option>1.0</option>
                                            <option>0.5</option>
                                        </select>
                                    </div>
                                </div>
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input type="text" defaultValue={photo} placeholder="Photo Url" name='photo' className="input  w-full" required />
                                <div className='mb-10 mt-4'>
                                    <button type='submit' className='btn hover:bg-[#fab105]  bg-[#bb800a]  normal-case text-white text-base w-full  '>Update Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;