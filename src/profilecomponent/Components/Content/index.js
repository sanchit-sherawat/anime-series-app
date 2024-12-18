// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/Components/Content/index.js
import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  flex-basis: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`;

const Content = ({ title, description, width, style }) => {
  return (
    <ContentWrapper width={width} style={{color:"black"}}>
      <h2>{title}</h2>
      <p>{description}</p>
    </ContentWrapper>
  );
};

Content.defaultProps = {
  description:
    "Scroll it! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
  width: "30%",
  title: "Slide title here",
  style:"color: black"
};

export default Content;
