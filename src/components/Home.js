import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios'

import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
// import db from "../firebase";


// APIKEY TMDB
const api_key = "75bd6d62c369e1e7a1248bcfb83f8ca6"
const base_url = "https://api.themoviedb.org/3"

function Home() {

  const [data, setData] = useState([])


  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
