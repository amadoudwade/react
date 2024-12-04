import './App.css';
import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

const name = "Go My Code";

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: "18rem" }} className="mx-auto">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="text-center mt-3">
        {name ? (
          <>
            <p>Bonjour, {name} !</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bQd1drUjbV_N_jIxlRlUfb-_bEDC8hyDtA&s"
              alt="Welcome"
              className="img-fluid"
            />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </Container>
  );
}

export default App;
