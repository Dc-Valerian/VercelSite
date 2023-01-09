import React from "react";
import styled from "styled-components";

const Preview: React.FC = () => {
  return (
    <Container>
      <TextCircle>
        <Line></Line>
        <Circle>
          <p>1</p>
        </Circle>
      </TextCircle>

      <Dev>Preview</Dev>

      <Top>
        <Title>Accelerate with your team</Title>
      </Top>
      <Bottom>
        <Left>
          <p>
            Frontend development is not meant to be a solo activity. The Vercel
            platform makes it a <br /> collaborative experience with deploy
            previews for every code change, by seamlessly integrating with
            GitHub, GitLab, and Bitbucket.
          </p>
        </Left>
      </Bottom>
    </Container>
  );
};

export default Preview;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Line = styled.div`
  width: 1px;
  height: 12vh;
  background-image: linear-gradient(to right, #951fba, #f70385);
  margin-top: 30px;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-image: linear-gradient(to right, #951fba, #f70385);
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
  background-image: linear-gradient(to right, #951fba, #f70385);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;
const Bottom = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  p {
    font-size: 1.4rem;
    opacity: 0.9;
    text-align: center;
  }
  a {
    color: #008aed;
    text-decoration: none;
  }
`;
