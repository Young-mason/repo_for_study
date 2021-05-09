import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [btnColor, setBtnColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newBtnColor =
    btnColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const handleClick = () => {
    setBtnColor(newBtnColor);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: disabled ? "gray" : btnColor }}
        onClick={handleClick}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newBtnColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
