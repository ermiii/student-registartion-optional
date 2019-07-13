import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import boatImage from "../picture/boatImage.jpg";

const Styles = styled.div`
.jumbo{
  background: url(${boatImage}) no-repeat center center ;
  
color:#fefefe;
 background-size: cover;
 height:400px;
  position:relative;
  z-index:1;}
  .overlay{
    background-color:grey;
    opacity:0.4;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
  }
}`;

export class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay" />
          <Container>
            <h1>Welcome to CYF</h1>
            <h2>This is Student and Mentors Registration Page!</h2>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
