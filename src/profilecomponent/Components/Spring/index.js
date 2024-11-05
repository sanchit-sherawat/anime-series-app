// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/Components/Spring/index.js
import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

import Content from "../Content";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 500px;
  height: 100%;
  background-image: url(${"https://www.w3schools.com/howto/img_forest.jpg"});
  background-size: cover;
  background-position: center;
`;

const forwardStyleImage = { transform: "translateX(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateX(100%)", opacity: 0 };

const forwardStyleContent = {
  transform: "scale(.5) translateX(100%)",
  opacity: 0
};
const backwardStyleContent = {
  transform: "scale(2) translateY(100%)",
  opacity: 0
};

const WithImage = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <Image />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Content title={"This is spring"} />
    </ActiveItem>
  </Wrapper>
);

export default WithImage;
