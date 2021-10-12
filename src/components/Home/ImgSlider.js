/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderAPI } from "../API/LocalAPI";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {sliderAPI &&
        sliderAPI.map((value, index) => (
          <Wrap key={index}>
            <img src={value.bannerImg} />
          </Wrap>
        ))}
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  /* margin-top: 70px; */

  ul li button {
    &:before {
      font-size: 11px;
      color: rgb(150, 158, 171);
    }
  }

  ul li.slick-active button {
    &:before {
      color: white !important;
    }
  }

  /* left right button */
  & > button {
    opacity: 0;
    z-index: 1;
    width: 5vw;
    height: 100%;

    &:hover {
      opacity: 1;
      z-index: 2;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-prev {
    left: -70px;
  }

  .slick-next {
    right: -70px;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: default;
  border-radius: 4px;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    @media screen and (min-width: 375px) and (max-width: 550px) {
    width: 100%;
    height: 15vh;
    object-fit: fill;
  }
    @media screen and (min-width: 280px) and (max-width: 375px) {
    width: 100%;
    height: 17vh;
    object-fit: fill;
  }

    &:hover {
      padding: 1px;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 250ms;
    }
  }
`;
