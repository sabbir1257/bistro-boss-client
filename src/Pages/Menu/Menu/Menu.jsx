import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/assets/menu/banner3.jpg";
import dessertImg from "../../../assets/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="OUR MENU"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu items  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        img={dessertImg}
        items={desserts}
        title="dessert"
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        img={pizzaImg}
        items={pizza}
        title="pizza"
      ></MenuCategory>
      {/* SALADS menu items */}
      <MenuCategory
        img={saladImg}
        items={salad}
        title="salad"
      ></MenuCategory>
      {/* supe menu items */}
      <MenuCategory
        img={soupImg}
        items={soup}
        title="soup"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
