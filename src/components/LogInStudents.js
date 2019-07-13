import React, { Component } from "react";

import { Button, Container, Form } from "react-bootstrap";

import styled from "styled-components";
const Styles = styled.div`
  .container {
    width: 400px;
    margin: 16px auto;
    font-size: 16px;
  }
   {
    border-radius: 10px;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    padding: 16px;
    outline: 0;
    color: #333333;
    font-family: inherit;
    font-size: 0.95em;
  }
`;

class LogInStudents extends Component {
  state = {
    email: "",
    password: ""
  };

  signIn(e) {
    e.preventDefault(e);
    console.log("this.state", this.state);
  }
  render() {
    return (
      <Styles>
        <Container className="container">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <h2>Students Sign In</h2>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={event => this.setState({ email: event.target.value })}
              />
              <Form.Text className="text-muted" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox" />
            <Button
              variant="primary"
              type="submit"
              onClick={event => this.signIn(event)}
            >
              Sign In
            </Button>
          </Form>
        </Container>
      </Styles>
    );
  }
}

export default LogInStudents;
