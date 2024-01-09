import React from "react";
import Footer from "../components/Footer";
import NavbarSearch from "../components/NavbarSearch";
import Testimony from "../components/testimony";
import Carousel from "../components/Carousel";

export default function HomePage() {
  return (
    <div>
      <NavbarSearch />
      <Carousel/>
      <Testimony />
      <Footer />
    </div>
  );
}
