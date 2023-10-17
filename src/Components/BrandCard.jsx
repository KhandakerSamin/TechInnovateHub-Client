/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  return (
    <div className="card bg-slate-300">
      <img className="w-[500px] bg-white h-[350px]" src={brand.photo} alt="" />
      <Link to={`/brandDetails/${brand.brand}`}>
        <h1 className="text-2xl font-bold py-7 text-center cursor-pointer">
          {brand.brand}
        </h1>
      </Link>
    </div>
  );
};

export default BrandCard;
