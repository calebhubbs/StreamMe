import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Originals() {
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
      <Con>
        <h1> ORIGINALS </h1>
      </Con>
      <HeaderOne>
        <h3> Featured </h3>
      </HeaderOne>
      <ConOne>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BDDB52B96D847D8DDAD5B08DE94A1A1BC6E006011D04F16B09566C8AB606DF57/scale?width=1920&aspectRatio=1.78&format=png"
            alt="disney"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/807D22307680A90F5F9766E4B265D2236D1BE874C3C1F5C4C3D3515E253F2779/scale?width=1920&aspectRatio=1.78&format=png"
            alt="Marvel"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/69AA012328CECE606EEA3EC2B89885D6B8566132C23F78315129C7D8EAEEA9BD/scale?width=1920&aspectRatio=1.78&format=png"
            alt="Pixar"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5FF24363E2332D83F184B8C681A4B8039DF0171F4442F08A974DB29075C3A4B/scale?width=1920&aspectRatio=1.78&format=png"
            alt="Starwars"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C62AB4F7C548310A508FFD78490B3F7384431837B189D06C6587C2EFFE812DAC/scale?width=1920&aspectRatio=1.78&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/39EB712027C82397B629C94A7BDCFF55DB0D52614089FE252C193164A06E5E35/scale?width=1920&aspectRatio=1.78&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9A7509955DA42AABE8513111CEC83C7E79AF141832D0832479DFEC31D19AC589/scale?width=1920&aspectRatio=1.78&format=png"
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
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5DEB53D8A009839DAA469B3DB5736E4939BF749F4F23109E1596223BE453C6A/scale?width=1920&aspectRatio=1.78&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A29018B33B39F3C7940C65A1932CD1025BAE8B809B2826EE0181665565748886/scale?width=1920&aspectRatio=1.78&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
      </ConOne>
      <HeaderTwo>
        <h3>Specials</h3>
      </HeaderTwo>
      <Content>
        <Carousel {...settings}>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AEF05E6F76048E62BE9C5FAD373BDCD17E8E0F7EC8E563896A77C078C232B351/scale?width=1920&aspectRatio=1.78&format=png"
              alt="disney"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29129D98B484E07B252A23C34E2B582265B52FA41B01E68F59E700709D71725C/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Marvel"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA8EA11EA4D5BB7D1A840566AC3C238F0C548EECC746A32557877A666CAB5B95/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Pixar"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0D3D17DC8AFBD167FBC2C95B7B299007CB8D3D59542E094B8E7A94E5B7B13F45/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Starwars"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/363D64E2A449FA1ED61B6B515916888B5D765954237A9112FDD478C02D3AE19C/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/750A6EFD20F44F69513263BA411947649A6F32DF8CE522100A0F51DD80AFCDAE/scale?width=1921&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
          <Wrap>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/972DD37849488FDA86531B40B77F44476B7970E09DCB4F4382B56695273A6D28/scale?width=1920&aspectRatio=1.78&format=png"
              alt="Nat-Geo"
            />
          </Wrap>
        </Carousel>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  letter-spacing: 2px;
  padding: 30px 30px;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    min-height: calc(100vh - 80px);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Content = styled.div`
  letter-spacing: 2px;
  padding: 30px 30px;
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
    border-radius: 10px;

    &:hover {
      border: 2px solid white;
    }
  }
`;
const Con = styled.div`
  letter-spacing: 15px;
  padding: 70px 70px;
  font-weight: bold;
  align-items: center;
  text-align: center;
`;

const ConOne = styled.div`
  padding: 30px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const HeaderOne = styled.div`
  letter-spacing: 2px;
  padding: 15px 15px;
`;
const HeaderTwo = styled.div`
  letter-spacing: 2px;
  padding: 5px 5px;
`;
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
export default Originals;
