// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/Components/Autumn/index.js
import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

import Content from "../Content";
// import imageUrl from "../../../assets/autumn.jpg";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 500px;
  height: 100%;
  background-image: url(${"https://www.w3schools.com/howto/img_5terre.jpg"});
  background-size: cover;
  background-position: center;
`;

const forwardStyleImage = { transform: "translateX(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateX(100%)", opacity: 0 };

const forwardStyleContent = { transform: "scale(.5)", opacity: 0 };
const backwardStyleContent = { transform: "scale(2)", opacity: 0 };

const WithImage = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Content title={"This is RSD cloud Project"} description={`
      Radiant RSD Cloud Portal Video DIRECT Video Streams for Edge Encoder and
      manage the property that has a license that created the channel.
      It has a user that can access all the management and the creating billboards
      and manage the time via rolls.\n
      Used tech React js, Node js, MongoDB.
      `} />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <Image />
    </ActiveItem>
  </Wrapper>
);

export default WithImage;
