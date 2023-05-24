import React from "react";
import Banner from "../Banner";
import Category from "../Category";
import PopularMenu from "../PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
