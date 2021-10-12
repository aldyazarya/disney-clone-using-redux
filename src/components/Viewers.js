/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

import viewersDisney from "../images/viewers-disney.png";
import viewersPixar from "../images/viewers-pixar.png";
import viewersMarvel from "../images/viewers-marvel.png";
import viewersStarWars from "../images/viewers-starwars.png";
import viewersNational from "../images/viewers-national.png";

import videoDisney from "../videos/1564674844-disney.mp4";
import videoPixar from "../videos/1564676714-pixar.mp4";
import videoMarvel from "../videos/1564676115-marvel.mp4";
import videoStarWars from "../videos/1608229455-star-wars.mp4";
import videoNational from "../videos/1564676296-national-geographic.mp4";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={viewersDisney} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={videoDisney} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewersPixar} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={videoPixar} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewersMarvel} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={videoMarvel} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewersStarWars} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={videoStarWars} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewersNational} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={videoNational} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
