import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

return (
    <Section>
      <Title>Our Idols!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="It is an honor to provide this scholarship, which will enable talented individuals to pursue their dreams and make a positive impact on our society."
            name="Narendra Modi"
            image="modiji"
          />

          <Card
            text="Empowering minds through education shapes our nation's future. This scholarship helps dreams take flight, driving societal progress."
            name="Dr Apj Abdul Kalam"
            image="Abdulkalam"
          />

          <Card
            text="Education unlocks freedom and equality. This scholarship fosters a just society, giving everyone a chance to rise and contribute."
            name="Dr Babasaheb Ambedkar"
            image="Babasaheb"
          />

          <Card
            text="The light of education dispels the darkness of ignorance. This scholarship is a beacon of hope, empowering individuals to achieve their dreams and transform their lives and communities."
            name="Savitribai Phule"
            image="savitribai"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
