import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Currency from "./Currency";
import "./App.css";

function App() {
  const [currency] = useState(Currency);
  return (
    <Container className="p-5">
      <h2>Currencies</h2>
      <div className="count p-5">
        {currency.map((item) => (
          <Card
            className="bold currency"
            style={{ width: "18rem" }}
            key={item.id}
          >
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <div className="count">
                {item.currencies.map((arrayItem, index) => (
                  <p className="m-3 p-2 currency2 " key={index}>
                    {arrayItem}
                  </p>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default App;
