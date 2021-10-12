import React from "react";
import styled from "styled-components";
import Stream from "./Login/Stream";
import Banner from "./Login/Banner";
import DownloadNow from "./Login/DownloadNow";

function Login() {
  return (
    <>
      <Main>
        <Banner />
        <Stream/>
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