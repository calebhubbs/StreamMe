import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Original() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <h5> Originals </h5>
      <Content>
        <Carousel {...settings}>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E1A97AE017FB48F8D917420A830AD660DBB452C3DF592F0C2B903303E0B68E8/scale?width=1920&aspectRatio=1.78&format=png"
              alt="disney"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F1F9044DCCD7BB607C281F785A37F6C121CB6BAD218260919F81C68DA548BFB9/scale?width=1344&aspectRatio=1.78&format=png"
              alt="Marvel"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A29018B33B39F3C7940C65A1932CD1025BAE8B809B2826EE0181665565748886/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Pixar"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/39EB712027C82397B629C94A7BDCFF55DB0D52614089FE252C193164A06E5E35/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Starwars"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BDDB52B96D847D8DDAD5B08DE94A1A1BC6E006011D04F16B09566C8AB606DF57/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97BDAAF6E7B620EB1CD0B9DC3C7432742911FB1ACC6E225749A2C4F78B8F7EB4/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/23FF36B5AD496A7548ED556914ED630100302110C792B3E19AD90A8C935E3AB1/scale?width=1920&aspectRatio=1.78&format=png"
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
export default Original;
