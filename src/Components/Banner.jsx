import bannerImg from '../assets/Images/iphone15banner.webp'

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`
    }
    return (
        <div className='h-[650px] mx-24 w-auto' style={bannerStyle}>
            {/* <h1 className='text-7xl mb-8 pt-52 text-white text-center'>Would you like a Cup of Delicious Coffee?</h1>
            <p className=' mb-5 px-10 font-serif text-xl text-white text-center '>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='bg-[#E3B577] text-white text-xl rounded-sm hover:bg-transparent hover:border py-2 px-4'>Learn More</button> */}
        </div>
    );
};

export default Banner;