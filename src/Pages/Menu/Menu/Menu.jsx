import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover";

const Menu = () => {

    return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="OUR MENU"></Cover>
    </div>
  );
};

export default Menu;


