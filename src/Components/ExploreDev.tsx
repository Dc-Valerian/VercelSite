import React from 'react';
import styled  from 'styled-components';
import line from "../images/line.png";

const ExploreDev = () => {
  return (

    <Container>
        <Wrapper>
            <Explore>
                EXPLORE THE VERCEL WAY
            </Explore>
            <Develop>
                <div 
                className='number'>1</div>
                <h1 className='dev'>Develop</h1>
            </Develop>
            <Start>
            Start with the developer
            </Start>
            <DevText>
                <p>
                Developers love <span>Next.js</span>, the open source React framework Vercel 
                <br />
                built together with Google and Facebook. Next.js powers the biggest websites like <span>Patreon</span>, for use cases in <span>e-commerce</span>,<span>travels</span>,
                <br />
                <span>news</span>, and <span>marketing</span>.
                </p>
                <p>
                Vercel is the best place to deploy any frontend app. Start by 
                <br />
                deploying with zero configuration to our <span>global edge network</span>. 
                
                <span>     Scale dynamically</span> to millions of pages without breaking a sweat.
                </p>
            </DevText>
        </Wrapper>

        {/* <Section2>
            <div className='box1'></div>
            <div className='box2'></div>
        </Section2> */}
    </Container>
  )
}

export default ExploreDev;

const Container = styled.div`
    width: 100%;
    height: 90vh;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Wrapper = styled.div`
    width: 80%;
    height: 80vh;
    /* background-color: lavender; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`;
const Explore = styled.div`
    font-size: large;
    font-weight: bold;
`;
const Develop = styled.div`
    width: 190px;
    height:150px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .number{
        width: 45px;
        height: 45px;
        /* background-color: green; */
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: cursive;
        background-image: linear-gradient(to right, blue, skyblue);
    }
    h1{
        background-image: linear-gradient(to right, blue, skyblue);
	    background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        font-size: 30px;
    }
`;
const Start = styled.div`
    font-size: 60px;
    font-weight: bold;
`;
const DevText = styled.div`
        width: auto;
        height: auto; 
        /* background-color: green; */
        display: flex; 
        justify-content: space-between; 
        
       p{
        padding-right: 20px;
        text-align: start;
       }
       span{
        color: blue;
       }
`;
