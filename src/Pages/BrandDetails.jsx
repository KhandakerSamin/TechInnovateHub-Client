import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import img1 from '../assets/Images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299835.jpg'
import img2 from '../assets/Images/vecteezy_colorful-orange-summer-sale-banner-coupon-template-with-hand_24233982.jpg'
import img3 from '../assets/Images/vecteezy_3d-vector-illustration-of-juicy-sliced-citrus-fruits-like_24667057.jpg'

const BrandDetails = () => {
  // Access the products data using useLoaderData
  const products = useLoaderData();

  console.log(products);

  return (
    <div>
      <div>
        <div className="carousel mb-16 mt-5 w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-3xl text-center font-bold'>Details Route for :{products.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mr-5'>
        {
          products.map(singleProduct => <ProductCard key={singleProduct._id} singleProduct={singleProduct}></ProductCard>)
        }
      </div>
    </div>
  );
};

export default BrandDetails;
