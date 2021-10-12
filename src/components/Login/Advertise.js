import React from "react";
import styled from "styled-components";

import logo from "../../images/cta-logo-one.svg";

function Advertise() {
  return (
    <>
      <Section>
        <Container>
          <ImgInfo>
            <img src={logo} />
          </ImgInfo>
          <TextInfo>
            <p>
              {" "}
              Get The Disney Bundle to Stream the best movies, shows, and sports
              with Disney+, HULU and ESPN+. Term Apply
            </p>
            <button type="button" className="btn-theme-disney">
              GET THIS DISNEY BUNDLE
            </button>
          </TextInfo>
        </Container>
      </Section>
    </>
  );
}

export default Advertise;

const Section = styled.section`
  position: relative;
  padding: 35px 5%;
  background: transparent;
`;
const Container = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #f9f9f9;
  padding: 35px 5%;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    padding: 25px 35px;
    justify-content: center;
    text-align: center;

  }
  @media screen and (max-width: 991px) {
    padding: 25px 15px;
    text-align: center;

  }
`;
const ImgInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  @media screen and (max-width: 991px) {
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
`;
const TextInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
  p {
    font-size: 1rem;

    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;
