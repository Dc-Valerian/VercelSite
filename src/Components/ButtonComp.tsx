import React from "react";
import styled from "styled-components";

interface iprops {
  title: string;
  icon: any;
  bg: string;
  col: string;
  borderColor: string[];
  count: number;
}

const ButtonComp: React.FC<iprops> = ({
  title,
  icon,
  bg,
  col,
  borderColor,
  count,
}) => {
  return (
    <GlobalButton
      bgs={bg}
      cols={col}
      bx={borderColor[count % borderColor.length]}
      cc={borderColor[count % borderColor.length]}
    >
      <Icon>{icon}</Icon>
      {title}
    </GlobalButton>
  );
};

export default ButtonComp;

const GlobalButton = styled.div<{
  bgs: string;
  cols: string;
  bx: string;
  cc: string;
}>`
  margin-top: 50px;
  width: 250px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.cols};
  background-color: ${(props) => props.bgs};
  border: 2px solid black;
  border-color: ${(props) => props.cc};
  font-weight: 600;
  box-shadow: ${(props) => props.bx} 0px 48px 100px 0px;
  transition: all ease-in 0.2s;

  :hover {
    background-color: ${(props) => props.bgs};
    color: white;
    font-weight: 600;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
