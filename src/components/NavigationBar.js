import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: grey;
  }
  .navbar-brand {
    margin: 0;
    padding: 0;
  }
  .logo {
    height: 50px;
    padding-left: 5px;
    padding-right: 15px;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    &:hoover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="">
        <img
          className="img-responsive logo"
          src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
export default NavigationBar;
