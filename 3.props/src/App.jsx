import { useState } from "react";
import "./App.css";
import Product from "./Product";
import Container from "../../2.component-yapisi/src/Container";

function App() {
  const productName = "T-shirt";

  return (
    <Container>
      <div>
        <Product productName="Ayakkabı" price={3500} />
        <hr />
        <Product productName="Pantolon" price={600} />
        <hr />
        <Product productName={productName} price={450} />
      </div>
    </Container>
  );
}

export default App;
