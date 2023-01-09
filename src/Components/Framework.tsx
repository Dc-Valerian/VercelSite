import React from "react";
import styled from "styled-components";

interface iprops {
  title: string;
}

const Framework: React.FC<iprops> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Framework;

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h4`
  letter-spacing: 0.2rem;
`;
const Image = styled.div``;
