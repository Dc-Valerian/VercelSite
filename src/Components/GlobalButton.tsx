import React from "react";
import styled from "styled-components";
// import BsFillTriangleFill from "react-icons/bs";
import { BsFillTriangleFill } from 'react-icons/bs'


interface Iprops {
	icon: any;
	btnText: string;
	bg: string;
	col: string;
	borderCol1: string[];
	count: number;
}

const GlobalButton: React.FC<Iprops> = ({
	btnText,
	icon,
	bg,
	col,
	borderCol1,
	count,
}) => {
	return (
		<Button
			bx={borderCol1[count % borderCol1.length]}
			cc={borderCol1[count % borderCol1.length]}
			cols={col}
			bgs={bg}>
			<Icn>{icon}</Icn>
			{btnText}
		</Button>
	);
};

export default GlobalButton;

const Icn = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Button = styled.div<{
	bgs: string;
	cols: string;
	cc: string;
	bx: string;
}>`
	width: 200px;
	height: 45px;
	background-color: ${(myprops) => myprops.bgs};
	color: ${(props) => props.cols};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 5px;
	margin-left: 20px;
	border: 1px solid black;
	border-color: ${(props) => props.cc};
	font-weight: bold;
	box-shadow: ${(props) => props.bx} 0px 4px 40px 0px;
`;