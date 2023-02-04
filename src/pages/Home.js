import React from "react";
import { Container } from "react-bootstrap";
import "../assest/css/style.css";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="herosection">
      <Container className="pt-5">
        <h2>Simple Book List App</h2>
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
