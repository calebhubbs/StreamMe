import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movies() {
    let settings = {
        dots: false, 
        infinite: true, 
        speed: 400,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Container>
      <h5>Recommended For You</h5>
      <Content>
        <Carousel {...settings}>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DCB0A72B33AE182A0AC494E0FD928F00812234F088B47F9BCEC023FD5C07788E/scale?width=1344&aspectRatio=1.78&format=png"
              alt="disney"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D79E161ECF0D2A97F0472721B9AB72F59985D2E97E58FD0BAE86FCE85FE90E7/scale?width=1344&aspectRatio=1.78&format=png"
              alt="Marvel"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0723BEC1ACCB35142331EDD3ECF6A515F8F3378249EFDD921F29D3AEE56C275/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Pixar"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB9D595C6B8E18D4C8D1DB6E5CF6037C1C9C4BCC8F53C3A61DC3640EF6DBA757/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Starwars"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/30E9BBDEBA552EB52AA26FA87CBC2C4E451157C5674BC9B2C7FAFB3A5C4A72EA/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EBE5127EC947503445D6AD670C3D4A87EEC8AAB11C3F03D116BF3CC88B927B12/scale?width=1344&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B8AEDAF6D5F10E36203EAF86E217ABD4F9C21908DD17DC9396323AC3460FA4F7/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
        </Carousel>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``

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
    grid-template-columns: repeat(5, minmax(0,1fr));
    
`

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
