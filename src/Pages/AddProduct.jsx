// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
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
        const newProduct = { name, brand, category: type, description, price,  rating, photo }
        // console.log(newProduct);
        fetch(`https://tech-innovate-hub-server.vercel.app/products`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    });
                    // Uncomment the following line to reset the form
                    form.reset();
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
        <div className="relative my-16">
            <div className=" flex justify-center items-center  h-full" >

                <div className='w-2/3 h-5/6 rounded-md bg-[#F0ECCF]'>
                    <h1 className='text-4xl mt-12 mb-5 text-[#374151] text-center font-bold'>Add New Product</h1>
                    <div className='mx-14'>
                        <div className=''>
                            <form onSubmit={handleAddProduct} className='my-8'>
                                <div className='flex flex-col md:flex-row gap-x-10'>
                                    <div className='w-full md:w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" placeholder="Product Name" name='name' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <select name="brand" className="select w-full border-none select-bordered">
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
                                        <select name="type" className="select w-full border-none select-bordered">
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
                                        <input type="text" placeholder="Product Price" name='price' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Sort Description</span>
                                        </label>
                                        <input type="text" placeholder="Sort Description" name='description' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Product Raiting</span>
                                        </label>
                                        <select name="rating" className="select w-full   border-none select-bordered">
                                            <option disabled selected>Select Rating Point</option>
                                            <option>5.0</option>
                                            <option>4.0</option>
                                            <option>3.0</option>
                                            <option>2.0</option>
                                            <option>1.0</option>
                                        </select>
                                    </div>
                                </div>
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name='photo' className="input  w-full" required />
                                <div className='mb-10 mt-4'>
                                    <button type='submit' className='btn hover:bg-[#fab105]  bg-[#bb800a] normal-case text-white text-base w-full  '>Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;