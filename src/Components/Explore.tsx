import React from "react";
import styled from "styled-components";

const Explore: React.FC = () => {
  return (
    <Container>
      <TextCircle>
        <Text>EXPLORE THE VERCEL WAY</Text>
        <Line></Line>
        <Circle>
          <p>1</p>
        </Circle>
      </TextCircle>

      <Dev>Develop</Dev>
    </Container>
  );
};

export default Explore;

const Container = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.p`
  letter-spacing: 0.4em;
  font-weight: 700;
  font-size: 0.8rem;
  opacity: 0.7;
`;
const Line = styled.div`
  width: 1px;
  height: 12vh;
  background-image: linear-gradient(to right, skyblue, #008aed);
  margin-top: 30px;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #008aed;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }
`;
const TextCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Dev = styled.h1`
  background-image: linear-gradient(to right, #008aed, skyblue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
