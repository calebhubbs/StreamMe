import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
      <Container>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png"
            alt="disney"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png"
            alt="Marvel"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png"
            alt="Pixar"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png"
            alt="Starwars"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png"
            alt="Nat-Geo"
          />
        </Wrap>
      </Container>
    );
}

export default Viewers;

const Container = styled.div`
margin-top: 30px; 
display: grid; 
padding: 30px 0px 20px; 
grid-gap: 30px;
grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
cursor: pointer;
border-radius: 20px;
border: 2px solid rgba(249, 249, 249, 0.1);
transition: all 250ms cubic-bezier(.25, /46, .45, .94) 0s;



img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
}

&:hover {
    transform: scale(1.05);
    border-coler: rgba(249, 249, 249, 0.8); 
}
`