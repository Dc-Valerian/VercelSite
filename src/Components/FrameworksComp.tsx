import React from "react";
import styled from "styled-components";
import Framework from "./Framework";
import next from "./Assets/next.svg";
import react from "./Assets/react.svg";
import nuxt from "./Assets/nuxt.svg";
import vue from "./Assets/next.svg";
import gatsby from "./Assets/gatsby.svg";
import angular from "./Assets/angular.svg";
import hugo from "./Assets/hugo.svg";
import svelte from "./Assets/svelte.svg";

const FrameworksComp: React.FC = () => {
  return (
    <Container>
      <Framework title="WORKS WITH 30+ FRAMEWORKS" />
      <Second>
        <img src={next} alt="mm" />
        <img src={react} alt="mm" />
        <img src={nuxt} alt="mm" />
        <img src={vue} alt="mm" />
        <img src={gatsby} alt="mm" />
        <img src={angular} alt="mm" />
        <img src={hugo} alt="mm" />
        <img src={svelte} alt="mm" />
      </Second>
    </Container>
  );
};

export default FrameworksComp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Second = styled.div`
  width: 70vw;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 45px;
    margin-left: 50px;
  }
`;
