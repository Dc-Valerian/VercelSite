import React from 'react';
import styled from "styled-components";
import logo from "./Assets/logo.svg";
import { BsTwitter, BsGithub } from "react-icons/bs";

const VercelFooter = () => {
  return (
    <Container>
        <Wrapper>
            <Logodiv>
                <Logo src={logo}  />
            </Logodiv>
            <Seconddiv>
                <Box>
                    <h5>Frameworks</h5>
                    <Nav>Next.js</Nav>
                    <Nav>Create React App</Nav>
                    <Nav>Svelte</Nav>
                    <Nav>Nuxt</Nav>
                    <Nav>Gatsby</Nav>
                    <Nav>Vue</Nav>
                    <Nav>Angular</Nav>
                    <Nav>More Frameworks</Nav>
                </Box>

                <Box>
                    <h5>Resources</h5>
                    <Nav>Documentation</Nav>
                    <Nav>Experts</Nav>
                    <Nav>Customers</Nav>
                    <Nav>Guides</Nav>
                    <Nav>Help</Nav>
                    <Nav>API Reference</Nav>
                    <Nav>OSS</Nav>
                    <Nav>Command-Line</Nav>
                    <Nav>Integrations</Nav>
                </Box>

                <Box>
                    <h5>Company</h5>
                    <Nav>Home</Nav>
                    <Nav>Blog</Nav>
                    <Nav>Changelog</Nav>
                    <Nav>About</Nav>
                    <Nav>Careers</Nav>
                    <Nav>Pricing</Nav>
                    <Nav>Enterprise</Nav>
                    <Nav>Security</Nav>
                    <Nav>Next.js Conf</Nav>
                    <Nav>Partners</Nav>
                    <Nav>Contact Us</Nav>
                </Box>

                <Box>
                     <h5>Legal</h5>
                    <Nav>Privacy Policy</Nav>
                    <Nav>Trademark Policy</Nav>
                    <Nav>Inactivity Policy</Nav>
                    <Nav>DMCA Policy</Nav>
                    <Nav>Support Terms</Nav>
                    <Nav>DPA</Nav>
                    <Nav>SLA</Nav>
                    <Nav>Sub-processors</Nav>
                    <Nav>Cookie Preferences</Nav>
                    <Nav>Event Terms and Conditions</Nav>
                    <Nav>Job Applicant Privacy Notice</Nav>
                </Box>
            </Seconddiv>
        </Wrapper>
        <Lastpart>
            {/* <Copyright>
            Copyright © 2022 Vercel Inc. All rights reserved.
            </Copyright>
            <Icon>
                <BsTwitter />
                <BsGithub />
            </Icon>
            <Status>
            
            </Status>
            <System>
           
            </System> */}
        </Lastpart>
    </Container>
  )
}

export default VercelFooter;

const Container = styled.div`
    width: 100%;
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #b8b2b2;
    margin-top: 10px;
    flex-direction: column;
`;
const Wrapper = styled.div`
    width: 90%;
    /* background-color: silver; */
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin-top: 30px;
    flex-wrap: wrap;
    
`;
const Logodiv = styled.div`
    width : 200px;
    /* background-color: blue; */
    /* margin-top: 30px; */
`;
const Logo = styled.img`
    width: 100px;
    height: 100px;                   
`;
const Seconddiv = styled.div`
    width : 75%;
    /* background-color: red; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
    /* margin-top: 30px; */

`;
const Nav = styled.div`
    font-size: 15px;
    color: gray;
    transition: all 350ms;
    transform: scale(0.9);
    padding-bottom: 18px;
    font-weight: 500;
    /* background-color: red; */
    :hover{
        color: black;
        cursor: pointer;
    }
`;
const Box = styled.div`
    color: #545454;
    padding: 10px;
`;
const Lastpart = styled.div`
   
    
`;
// const Copyright = styled.div`
   
// `;
// const Icon = styled.img`
   
// `;
// const Status = styled.div`
   
// `;
// const System = styled.div`
   
// `;
