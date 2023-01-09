import React from "react";
import CountDown from "./CountDownComp";
import Develop from "./Develop";
import DevStart from "./DevStart";
import Explore from "./Explore";
import FFE from "./FFE";
import FrameworksComp from "./FrameworksComp";
import HeroComp from "./HeroComp";
import Preview from "./Preview";

const Body: React.FC = () => {
  return (
    <div>
      <HeroComp />
      <CountDown />
      <Develop />
      <Explore />
      <DevStart />
      <FFE />
      <FrameworksComp />
      <Preview />
    </div>
  );
};

export default Body;
