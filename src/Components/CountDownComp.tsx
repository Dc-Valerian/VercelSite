import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";

const CountDownComp = () => {

    // const SecondsRef = useRef();
    // const MinutesRef = useRef();
    // const HoursRef = useRef();
    // const DaysRef = useRef();
 
    const [days, setDays] = useState(5);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() =>{
        seconds === 0 && setSeconds(59);
        minutes === 0 && setMinutes(59);
        if (seconds > 0) {
            setTimeout(() =>{
                setSeconds(seconds - 1);
            }, 1000);
        
        }
        if (seconds === 0 && minutes > 0) {
            setMinutes(minutes - 1);
        }
    }, [seconds, minutes]);

    useEffect(() =>{
        hours === 0 && setHours(23);
        if (minutes === 0 && hours > 0) {
            setHours(hours - 1)
        }
    }, [minutes, hours]);

    useEffect(() =>{
        days === 5 && setDays(4);
        hours === 0 && setDays(days - 1);
    }, [hours, days]);
    

  return (
    <Container>
        <Div1>An online experience developers love • October 25, 2022 </Div1>

        <Div2>
            <Days>
                <TheCount>{days} :</TheCount>
                <span>Days</span>
            </Days>
            <Hours>
                <TheCount>{hours} :</TheCount>
                <span>Hours</span>
            </Hours>
            <Mins>
                <TheCount>{minutes} :</TheCount>
                <span>Mins</span>
            </Mins>
            <Secs>
                <TheCount> {seconds}</TheCount>
                <span>Secs</span>
            </Secs>
        </Div2>

        <Div3>
            Register Now
        </Div3>
    </Container>
  )
}

export default CountDownComp;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Div1 = styled.pre`
    font-size: 20px;
`;
const Div2 = styled.div`
    span{
        color: gray;
    }
    display: flex;
    justify-content: center;
    align-items: center;

`;
const Div3 = styled.div`
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-top: 40px;
    transition: all 350ms;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
    :hover{
        transform: scale(0.9);
    }

    
`;
const Days = styled.div`
`;
const Hours = styled.div`
`;
const Mins = styled.div`
`;
const Secs = styled.div`
`;
const TheCount = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-right:20px;
    transition: all 350ms;
`;
