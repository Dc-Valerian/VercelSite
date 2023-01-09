import React from "react";
import styled from "styled-components";

const DevStart: React.FC = () => {
  return (
    <Container>
      <Top>
        <Title>Start with the developer</Title>
      </Top>
      <Bottom>
        <Left>
          <p>
            Developers love <a href="#">Next.js</a>, the open source React
            framework Vercel built together with Google and Facebook. Next.js
            powers the biggest websites like <a href="">Patreon</a>, for use
            cases in <a href="#">e-commerce</a>, <a href="#">travel</a>,{" "}
            <a href="#">news</a>, and <a href="#">marketing</a>.
          </p>
        </Left>
        <Right>
          <p>
            Vercel is the best place to deploy any frontend app. Start by
            deploying with zero configuration to our
            <a href="#">global edge network</a>. <br />
            <a href="#">Scale dynamically</a> to millions of pages without
            breaking a <br /> sweat.
          </p>
        </Right>
      </Bottom>
    </Container>
  );
};

export default DevStart;

const Container = styled.div`
  height: 40vh;
  display: grid;
  grid-template-rows: 15vh 0.8fr;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 4rem;
`;
const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 250px;
  margin-right: 250px;
`;
const Left = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
  a {
    color: #008aed;
    text-decoration: none;
  }
`;
const Right = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  p {
    font-size: 1.1rem;
    opacity: 0.9;
    text-align: left;
  }
  a {
    color: #008aed;
    text-decoration: none;
  }
`;
