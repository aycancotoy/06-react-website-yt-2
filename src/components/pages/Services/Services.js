import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import {homeObjOne} from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
    </>
  );
}

export default Home;
