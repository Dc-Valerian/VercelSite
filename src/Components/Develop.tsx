import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
import ButtonComp from "./ButtonComp";

const Develop: React.FC = () => {
  const [count, setcount] = useState(0);

  const colour1: string[] = [
    "linear-gradient(to right, blue, skyblue)",
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, black, black)",
  ];
  const colour2: string[] = [
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, purple, #da45da)",
    "linear-gradient(to right, black, black)",
  ];
  const colour3: string[] = [
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, red, orange)",
  ];
  const borderColor: string[] = ["blue", "purple", "orange"];

  const myRef1 = useRef<any>();
  const myRef2 = useRef<any>();
  const myRef3 = useRef<any>();

  useEffect(() => {
    myRef1.current.style.backgroundImage = `${colour1[count % colour1.length]}`;
    myRef2.current.style.backgroundImage = `${colour2[count % colour1.length]}`;
    myRef3.current.style.backgroundImage = `${colour3[count % colour1.length]}`;

    setInterval(() => {
      setcount(count + 1);
    }, 3000);
  }, [count]);

  return (
    <Container>
      <Div1>
        <Dev ref={myRef1}>Develop.</Dev>
        <Prev ref={myRef2}>Preview.</Prev>
        <Sh ref={myRef3}>Ship.</Sh>
      </Div1>

      <Div2>
        <Text>
          Vercel is the platform for frontend developers, providing the speed
          and <br /> reliability innovators need to create at the moment of
          inspiration.
        </Text>
        <Button>
          <Icon>
            <ButtonComp
              bg="black"
              col="white"
              title="Start Deploying"
              icon={<BsFillTriangleFill />}
              borderColor={[]}
              count={count}
            />
            <ButtonComp
              bg=""
              col="black"
              title="Get a demo"
              icon=""
              borderColor={borderColor}
              count={count}
            />
          </Icon>
        </Button>
      </Div2>
    </Container>
  );
};

export default Develop;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Div1 = styled.div`
  display: flex;
  font-size: 40px;
  margin-top: 30px;
  transition: all ease-in 0.3;
`;
const Dev = styled.h1`
  /* background-image: linear-gradient(to right, blue, skyblue); */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Prev = styled.h1`
  /* background-image: linear-gradient(to right, purple, #da45da); */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Sh = styled.h1`
  /* background-image: linear-gradient(to right, red, orange); */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Div2 = styled.div``;
const Icon = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.div``;
const Text = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  opacity: 0.8;
`;
