// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/index.js
import React from "react";

import { Carousel } from "react-scroll-slider";

import Winter from "./Components/Winter";
import Autumn from "./Components/Autumn";
import Summer from "./Components/Summer";
import Spring from "./Components/Spring";

const Slider = () => (
  <>
  <h2>Projects</h2>
  <Carousel>
    <Winter />
    <Autumn />
    <Summer />
    <Spring />
  </Carousel>
  </>
);

export default Slider;
