import React from "react";
import styled from "styled-components";
import logo from "./Assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} />

      <Navhold>
        <Nav>Features</Nav>
        <Nav>Templates</Nav>
        <Nav>Integrations</Nav>
        <Nav>Customers</Nav>
        <Nav>Enterprises</Nav>
        <Nav>Pricing</Nav>
      </Navhold>

      <NavAuth>
        <Nav>Contact</Nav>
        <Nav>Login</Nav>
        <Button>Sign up</Button>
      </NavAuth>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #e5e7e7;
  height: 9vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 120px;
  margin-left: 200px;
`;
const Navhold = styled.div`
  display: flex;
  margin-left: 60px;
`;
const Nav = styled.div`
  margin-left: 25px;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
  cursor: pointer;
  transition: all ease-in 2ms;

  &:hover {
    opacity: 1;
  }
`;
const Button = styled.div`
  margin-left: 25px;
  padding: 5px 12px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  transition: all ease-in 150ms;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 1px solid black;
    color: #000;
  }
`;
const NavAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 200px;
`;
