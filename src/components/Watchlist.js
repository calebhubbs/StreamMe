import React from "react";
import styled from "styled-components";

function Watchlist() {
  return (
    <Container>
      <ConOne>
        <Add>
          <span>+</span>
        </Add>
        <Watch>
          <h3>Your watchlist is empty</h3>
        </Watch>
        <Content>
          <p>Content you add to your watchlist will appear here</p>
        </Content>
      </ConOne>
    </Container>
  );
}

export default Watchlist;

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
  cursor: pointer;
  position: relative;
  font-weight: bold;
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
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Add = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgb(250, 250, 250);
  color: rgb(249, 249, 249);
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 612px;
  margin-top: 150px;
  span {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  &: hover {
    background: rgb(200, 200, 200);
  }
`;

const Content = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 10px;
`;

const Watch = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px 10px;
`;

const ConOne = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 250px;
`;
