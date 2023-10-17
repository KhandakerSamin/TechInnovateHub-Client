/* eslint-disable react/prop-types */

const BrandCard = ({brand}) => {
    return (
        <div className="card bg-slate-300 ">
            <img className="w-[500px] bg-white h-[350px]" src={brand.photo} alt="" />
            <h1 className="text-2xl font-bold py-7 text-center">{brand.brand}</h1>
        </div>
    );
};

export default BrandCard;