import React from "react";
import Testimony from "../components/testimony";
import Carousel from "../components/Carousel";
import CardItem from "../components/CardItem";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <CardItem />
      <Testimony />
    </div>
  );
}
