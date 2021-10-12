
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

import lucaImg from "../../images/LUCA-2.png";

function Popular() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <>
      <Section>
        <h1>Popular</h1>
        <Carousel {...settings}>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <NavLink to="/">
                <img src={lucaImg} />
              </NavLink>
            </div>
          </Wrap>
        </Carousel>
      </Section>
    </>
  );
}

export default Popular;

const Section = styled.section`
  padding: 0.5rem 0;

  h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    margin: 2vh 0 1vh 2rem;

    @media screen and (max-width: 991px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;
const Carousel = styled(Slider)`
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
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }

  .slick-list {
    overflow: visible;
  }
`;
const Wrap = styled.div`
  position: relative;

  div {
    border-radius: 4px;
    padding: 4px;
    display: block;
    opacity: 1;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    object-position: center;
    z-index: 2000;
  }

  img {
    width: 100%;
    display: block;
    height: 15vh;
    object-fit: fill;
    width: 100%;
    z-index: 1500;
    position: relative;

    @media screen and (max-width: 991px) {
      width: 100%;
      object-fit: cover;
      height: auto;
    }
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    z-index: 2000;
    opacity: 1;
    padding:1px;
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    
  }
`;
