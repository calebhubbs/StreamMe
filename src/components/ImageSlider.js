import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImageSlider() {

    let settings = {
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
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49F88B15AFD059802D0661A22C7E7B02EB15C898B4E4B9FE963DA006F30D30B3/scale?width=1920&aspectRatio=1.78&format=png"
            alt="disney characters"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9A7509955DA42AABE8513111CEC83C7E79AF141832D0832479DFEC31D19AC589/scale?width=1920&aspectRatio=1.78&format=png"
            alt="disney characters"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/61413A96D2A4ABB922FA5D13EAC61FA90AEBCB2A7F9457A9FFC42F8CBDEE6CA4/scale?width=1344&aspectRatio=1.78&format=png"
            alt="disney characters"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/807D22307680A90F5F9766E4B265D2236D1BE874C3C1F5C4C3D3515E253F2779/scale?width=1920&aspectRatio=1.78&format=png"
            alt="disney characters"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B1FBABCBF2450055150DA06196E718DFBCB3CECD793E36D035F58CB17A6040B2/scale?width=1920&aspectRatio=1.78&format=png"
            alt="disney characters"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6F1452DA54F1C05E5159F9D7B2E222FAABCD176CDC8726318D817F03836F835D/scale?width=1920&aspectRatio=1.78&format=png"
            alt="disney characters"
          />
        </Wrap>
      </Carousel>
    );
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button {
        &: before {
            font-size 12px;
            color: white;

        }
    }
    li.slick-active button: before{
        color: white; 
    }
    .slick-list{
    overflow: visible; 
    }
    button {
        z-index: 1;
    }
`

const Wrap = styled.div `

    cursor: pointer;
    img {
        border: 10px solid transparent; 
        border-radius: 5px;
        width: 100%;
        height: 450px;
        box-shawow: rgb(0 0 0 / 69%) 0px 26px 30pxx -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;


        &:hover{
            border: 5px solid white;
        }

    }
`