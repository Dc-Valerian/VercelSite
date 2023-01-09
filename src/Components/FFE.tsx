import React from "react";
import styled from "styled-components";
import img from "./Assets/img1.png";
import FFEprop from "./FFEprop";

const FFE: React.FC = () => {
  return (
    <Container>
      <Right>
        <img src={img} alt="img" />
      </Right>
      <Left>
        <One>
          <FFEprop
            title="Fast Refresh"
            text="Reliable live-editing experience for your UI components."
          />
        </One>
        <Two>
          <FFEprop
            title="Flexible Data Fetching"
            text="Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment."
          />
        </Two>
        <Three>
          <FFEprop
            title="Edge on Localhost"
            text="From caching to Serverless Functions, all our cloud primitives work perfectly on localhost."
          />
        </Three>
      </Left>
    </Container>
  );
};

export default FFE;

const Container = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-right: 200px;
  margin-left: 200px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  margin-left: 40px;
  display: grid;
  grid-template-rows: 20vh 20vh 20vh;
`;
const One = styled.div``;
const Two = styled.div``;
const Three = styled.div``;
