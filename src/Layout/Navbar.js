import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assest/css/style.css";
import Brand from "../assest/image/logo.webp";
const Navbarz = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <NavLink to="/">
          <img width={100} src={Brand} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <NavLink to="/">Home</NavLink>
            <NavLink className="mx-3" to="/counter">
              Counter
            </NavLink>
            <NavLink to="/add-books">Add Books</NavLink>
            <NavLink className="mx-3" to="/view-books">
              View Books
            </NavLink>
          </Nav>
          <Nav>
            <Button>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarz;
