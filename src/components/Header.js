/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

import logo from '../images/logo.svg'
import search from '../images/search-icon.svg'
import home from '../images/home-icon.svg'
import watchlist from '../images/watchlist-icon.svg'
import original from '../images/original-icon.svg'
import movies from '../images/movie-icon.svg'
import series from '../images/series-icon.svg'

function Header() {
  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu>
        <a>
          <img src={home} />
          <span>HOME</span>
        </a>
        <a>
          <img src={search} />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={watchlist} />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={original} />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src={movies} />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={series} />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
