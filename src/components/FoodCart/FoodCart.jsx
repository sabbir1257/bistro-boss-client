import React from "react";

const FoodCart = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <img src={image} alt="Shoes" />
      <p className="absolute right-5 top-2 px-3 py-1  bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 text-[#BB8506] border-[#BB8506]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
