// import img1 from '../assets/Images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299824.jpg';
// import img2 from '../assets/Images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_.jpg';
import img from '../assets/Images/tech.png';

const Banner = () => {
  return (
    <div className='h-[600px] w-full  relative overflow-hidden'>
      <img
        className='h-full rounded-b-xl w-full'
        src={img}
        alt='Banner'
      />
    </div>
  );
};

export default Banner;
