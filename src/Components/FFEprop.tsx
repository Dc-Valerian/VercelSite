import React from "react";
import styled from "styled-components";

interface iprop {
  title: string;
  text: string;
}

const FFEprop: React.FC<iprop> = ({ title, text }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default FFEprop;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-size: 1.5rem;
`;
const Text = styled.p`
  font-size: 1.1rem;
  margin-top: 8px;
  opacity: 0.8;
`;
