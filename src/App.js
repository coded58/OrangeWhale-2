import "./App.css";
import { useState } from "react";
import { Left, Main, Right } from "./components";

const App = () => {
  return (
    <div className="App">
      <Left />
      <Main />
      <Right />
    </div>
  );
};

export default App;
