import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Search() {
  return (
    <Container>
      <Bar>
        <input
          type="text"
          placeholder="Search by title, character, or genre (Not Functional)"
        />
      </Bar>
      <HeaderOne>
        <h1> Explore </h1>
      </HeaderOne>
      <ConOne>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A1040C78B912A6DD53FE5FDC1B3D5A6D93BB25C31A692E19DF8E47A0139AF475/scale?width=1200&aspectRatio=NaN&format=png"
            alt="disney"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F3E400D8681E925E72839AFF5D45CD1FD85718F96D5039C4692A8F8A4BA8515/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Marvel"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/119320ED26E0A500E4E013CBA46DC30A4C0CF54D17A52BC03CA85804CA1A5FAB/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Pixar"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/275D2398B1DC7DE7F0F097DEFDE28BF4F61FB67F318AB81450722885CD3E5B21/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Starwars"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/923E497E2B93C423FE0600A0ACB0A368C18651722ECD919F167EEA9A5953160B/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/299BD22AADE334166341BA4BCD705334575186E33D0BFB959BF48DC50D45FFF5/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F5EBBCE9A733F9262864F6F22B82B8ABB078A2D5AB4080E5FD95CAB1EC9C01F/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C06A99B3CAAE296E6BE7E37C96D5100764ABFCA1B1DFE775D7884413EB016850/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/508B1CB63B1D0678A400C0A2C600695EBDAF28A55E81F911F862898BBD747740/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3CE930360FF3594CB35B0B181858770C6D6B173763E1F29E5F92CDD2628B207D/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5095E23ABDFF45B98C147632702F3AD1091D7D36EFF132E2B2799815D893BEB/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E50DBB70F88EE0EB0C15389C1409FA38D053446E2E8CCCD6C1B6384266097BF/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/390949C493235770C14CC31A0E8F5FBB7AF0C6D743176FA163DF2E086E732E7E/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2B32743AF96385F096F3F08EA4E46018C7E31B01EAF7F637E47FD7F365BD5450/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D0F42357BB1D9D7F3205FC3FACD8FE4EDFC02C7AD897BE2707522FBE3009D542/scale?width=1200&aspectRatio=NaN&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
      </ConOne>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
  font-weight: bold;
  position: relative;
  overflow-x: hidden;
  letter-spacing: 1.5px;
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

const Bar = styled.div`
height: 50px; 

    input {
    height: 70px;
    width: 1000px;  
    background: transparent;
    color: grey;
    border: none;
    font-size: 40px;
}`;
const HeaderOne = styled.div`
  letter-spacing: 2px;
  margin-top: 125px; 
  

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
const ConOne = styled.div`
  padding: 30px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

export default Search;
