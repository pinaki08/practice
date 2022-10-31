import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import First from "./Components/Header/NavStyle";
import TextFrom from "./Components/Header/Text/TextFrom";
function App() {
  return (
    <div className="App">
      <First title="textname" />
      <Container>
        <TextFrom headding="your thoughts" />
      </Container>
    </div>
  );
}

export default App;
