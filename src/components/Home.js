import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import ImgSlider from "./Home/ImgSlider";
import Viewers from "./Home/Viewers";
import Original from "./Home/Original";
import NewtoDisney from "./Home/NewtoDisney";
import Trending from "./Home/Trending";
import Hollywood from "./Home/Hollywood";
import DisneyKids from "./Home/DisneyKids";
import Popular from "./Home/Popular";

import bgImg from "../images/home-background.png";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Original />
      <NewtoDisney />
      <Trending />
      <Hollywood />
      <DisneyKids />
      <Popular />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: block;

  &:before {
    background: url(${bgImg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
  }
`;
