import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountDown: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("10/27/2022");

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Title>An online experience developers love • October 25, 2022</Title>
      <DaysDiv>
        <DaysText>
          <Days>{days} :</Days>
          <Span>Days</Span>
        </DaysText>
        <DaysText>
          <Days>{hours} :</Days>
          <Span>Hours</Span>
        </DaysText>
        <DaysText>
          <Days>{minutes} :</Days>
          <Span>Min</Span>
        </DaysText>
        <DaysText>
          <Days>{seconds}</Days>
          <Span>Seconds</Span>
        </DaysText>
      </DaysDiv>
      <Button>Register</Button>
    </Container>
  );
};

export default CountDown;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.pre`
  font-size: 1.3rem;
  opacity: 0.8;
  letter-spacing: 0.1rem;
`;
const DaysDiv = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
`;
const DaysText = styled.div`
  margin-left: 10px;
  text-align: center;
`;
const Days = styled.pre`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
`;
const Span = styled.pre`
  text-align: left;
  letter-spacing: 0.2rem;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 15px 60px;
  background-color: white;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  color: #3c4043;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid black;

  &:hover {
    border: 1px solid orangered;
    color: #000;
  }
`;
