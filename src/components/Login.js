import React from "react";
import styled from "styled-components";
import Stream from "./Login/Stream";
import Banner from "./Login/Banner";
import DownloadNow from "./Login/DownloadNow";
import GroupWatch from "./Login/GroupWatch";
import MarvelStudio from "./Login/MarvelStudio";

function Login() {
  return (
    <>
      <Main>
        <Banner />
        <Stream/>
        <GroupWatch />
        <MarvelStudio />
        <DownloadNow />
      </Main>
    </>

  );
}

export default Login;


const Main = styled.div`
  width:auto;
  height: auto;
  overflow: auto;
`