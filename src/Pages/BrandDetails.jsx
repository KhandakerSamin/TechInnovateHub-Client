import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
  // Access the products data using useLoaderData
  const products = useLoaderData();

  console.log(products);

  return (
    <div>
            <h1 className='text-3xl text-center font-bold'>Details Route for : </h1>
    </div>
  );
};

export default BrandDetails;
