import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Follow = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='lg:px-[230px] mx-7 mt-8'>
      <p className='text-center mb-3 font-serif' data-aos="fade-up">Shop Now</p>
      <h1 className='text-5xl mb-16 text-center' data-aos="fade-up" data-aos-delay="300">Our Popular Products</h1>
      <div className='grid grid-cols-2 gap-3 mb-16 md:grid-cols-3 lg:grid-cols-4'>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/bNg4y7Pv/0x0.webp'} alt="" />
        </div>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/MZrFcySQ/Google-Pixel-7-Pro.webp'} alt="" />
        </div>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/Z524bqPh/hero-Pixelbook.jpg'} alt="" />
        </div>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/J4z8Md0b/Galaxy-S22-5-G-Pink-Gold-3714.jpg'} alt="" />
        </div>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/VsM4Gj8n/Samsung-Galaxy-Buds2-Pro-Purple-3-Custom-Mac-BD.webp'} alt="" />
        </div>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/1zfRD31v/41l-7n-ED0-L.jpg'} alt="" />
        </div>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/NfzqXqB4/One-Plus-9-Pro-featured-image-packshot-review.jpg'} alt="" />
        </div>
        <div className="bg-[#F0ECCF] h-full flex justify-center items-center w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img className="w-10/12 h-4/5" src={'https://i.postimg.cc/hPqNDd7n/GUEST-edbb2f98-0fbd-4da2-8661-d00a9c865fa8.jpg'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
