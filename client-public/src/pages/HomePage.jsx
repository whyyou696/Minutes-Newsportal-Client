import { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "../components/Footer";
import NavbarSearch from "../components/NavbarSearch";
import Testimony from "../components/testimony";
import Carousel from "../components/Carousel";
import CardItem from "../components/CardItem";

export default function HomePage() {
  return (
    <div>
      <NavbarSearch />
      <Carousel />
      <CardItem />
      <Testimony />
      <Footer />
    </div>
  );
}
