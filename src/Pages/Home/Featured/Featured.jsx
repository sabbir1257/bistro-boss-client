import React from "react";
import featured from "../../../assets/assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white py-4 my-8">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <h3>
            March 25, 2023 <br />
            WHERE CAN I GET SOME?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-r-4 mt-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
