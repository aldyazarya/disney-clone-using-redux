/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'
import slide6 from '../images/slide6.jpg'
import slide7 from '../images/slide7.jpg'

function ImgSlider() {

    let settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={slide1} />
            </Wrap>
            <Wrap>
                <img src={slide2} />
            </Wrap>
            <Wrap>
                <img src={slide3} />
            </Wrap>
            <Wrap>
                <img src={slide4} />
            </Wrap>
            <Wrap>
                <img src={slide5} />
            </Wrap>
            <Wrap>
                <img src={slide6} />
            </Wrap>
            <Wrap>
                <img src={slide7} />
            </Wrap>

        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color:white
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

`

const Wrap = styled.div`
    cursor: pointer;

    img {
        border-radius: 4px;
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }

    }
`