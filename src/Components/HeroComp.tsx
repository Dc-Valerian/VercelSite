import React from "react";
import styled from "styled-components";
import next from "./Assets/nextjs.png";
import vect from "./Assets/33.png";

const HeroComp: React.FC = () => {
  return (
    <Container>
      <Next src={next} />
      <Vector src={vect} />
    </Container>
  );
};

export default HeroComp;

const Container = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #e5e7e7;
  box-shadow: 0px 50px 50px rgba(229, 231, 231, 1);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Next = styled.img`
  height: 80px;
  width: 300px;
`;
const Vector = styled.img`
  height: 300px;
`;
