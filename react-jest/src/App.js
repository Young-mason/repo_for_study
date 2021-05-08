import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");

  const newBtnColor = btnColor === "red" ? "blue" : "red";
  const handleClick = () => {
    setBtnColor("blue");
  };

  return (
    <div className="App">
      <button style={{ backgroundColor: btnColor }} onClick={handleClick}>
        Change to {newBtnColor}
      </button>
    </div>
  );
}

export default App;
