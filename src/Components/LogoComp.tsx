import React from 'react';
import styled from "styled-components";
import image from "../images/vercelImage.png";

const Body = () => {
  return (
    <BodyWrapper>
      <BgTopWrap>
        <Next>
          <h1>NEXT</h1>
        </Next>
        <Js>
          <p>.JS</p>
        </Js>
        <ConfWrap>
          <Conf>
          <h3>CONF</h3>
          </Conf>
        </ConfWrap>
      </BgTopWrap>

      <Image src={image} />

    </BodyWrapper>
  )
}

export default Body;

const BodyWrapper = styled.div`
    background-color: #D6D8D9;
    height: 500px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 40px 40px rgba(214, 216, 217, 1);
`;
const BgTopWrap = styled.div`
   height: 10vh;
   width: 270px;
   margin-top: 29px; 
   display: flex;
   align-items: center;
   justify-content: center;
  //  background-color : red;
`;
const Image = styled.img`
    height : 400px;
    object-fit: cover;
    // background-color : black;
    width : 900px;
`;
const Next = styled.div`
    font-size: 25px;
    font-family: verdana;
    font-weight: bold;
`;
const Js = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    margin-right: 20px;
`;
const ConfWrap = styled.div`
    display: flex;
    // background : green;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 50px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;
const Conf = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    align-self: center;
`;