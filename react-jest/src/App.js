import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newBtnColor = btnColor === "red" ? "blue" : "red";
  const handleClick = () => {
    setBtnColor(newBtnColor);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: btnColor }}
        onClick={handleClick}
        disabled={disabled}
      >
        Change to {newBtnColor}
      </button>
      <input type="checkbox" onClick={() => setDisabled(!disabled)} />
    </div>
  );
}

export default App;