import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function New() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <h5> New to Disney+ </h5>
      <Content>
        <Carousel {...settings}>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D8C04B7F84028EA56FF508885E6FF9F1BF97CD312A7511B4BC5A4AEDA8F6D5DC/scale?width=1920&aspectRatio=1.78&format=png"
              alt="disney"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E3A2A6A9CB87E6A901F5B2ABB0877992284692A2D3A6FB71067082A6C90F5321/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Marvel"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/807D22307680A90F5F9766E4B265D2236D1BE874C3C1F5C4C3D3515E253F2779/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Pixar"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C62AB4F7C548310A508FFD78490B3F7384431837B189D06C6587C2EFFE812DAC/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Starwars"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4420C14FB3734C91B23EB47B78A558E3C5AB6251B0045BFD36C303D29D59BFD0/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD8516153B07876DFEDD4DC163846871C2552B8484BEAAE29ED19A05AAD9BD02/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/61413A96D2A4ABB922FA5D13EAC61FA90AEBCB2A7F9457A9FFC42F8CBDEE6CA4/scale?width=1344&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
        </Carousel>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Carousel = styled(Slider)`
  margin-top: 20px;
  margin-bottom: 15px;
  li.slick-activebutton: {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  padding: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 3px solid transparent;
    border-radius: 10px;

    &:hover {
      border: 2px solid white;
    }
  }
`;
export default New;
