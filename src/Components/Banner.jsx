import img1 from '../assets/Images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299824.jpg';
import img2 from '../assets/Images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_.jpg';

const Banner = () => {
  return (
    <div className='h-[600px] w-full relative overflow-hidden'>
      <img
        className='h-full w-full'
        src={img1}
        alt='Banner'
      />
    </div>
  );
};

export default Banner;
