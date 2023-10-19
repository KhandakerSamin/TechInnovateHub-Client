/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BrandCard = ({ brand }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="card sm:w-[400px] shadow-xl md:ml-10 md:w-[300px] lg:h-[300px] lg:w-[300px] gap-x-10 bg-[#F0ECCF] mb-10"
      data-aos="fade-up" // AOS animation: fade-up
      data-aos-duration="1000" // Animation duration in milliseconds
      data-aos-offset="200" // Offset (in pixels) from the start of the element when animation triggers
    >
      <div
        className="w-[250px] mt-6 ml-6  h-[200px]"
        data-aos="fade-right" // AOS animation: fade-right
        data-aos-duration="800" // Animation duration in milliseconds
        data-aos-offset="100" // Offset (in pixels) from the start of the element when animation triggers
      >
        <img
          className="w-[250px] h-[200px] bg-white"
          src={brand.photo}
          alt=""
          data-aos="fade-left" // AOS animation: fade-left
          data-aos-duration="800" // Animation duration in milliseconds
          data-aos-offset="100" // Offset (in pixels) from the start of the element when animation triggers
        />
      </div>

      <Link to={`/brandDetails/${brand.brand}`}>
        <h1
          className="text-2xl font-bold pt-5 text-center cursor-pointer"
          data-aos="fade-up" // AOS animation: fade-up
          data-aos-duration="1000" // Animation duration in milliseconds
          data-aos-offset="200" // Offset (in pixels) from the start of the element when animation triggers
        >
          {brand.brand}
        </h1>
      </Link>
    </div>
  );
};

export default BrandCard;
