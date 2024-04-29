import React, { useState } from "react";
import "./App.css";

function App() {
  const [heights, setHeights] = useState("");
  const [waterTrapped, setWaterTrapped] = useState(null);

  const handleHeightChange = (event) => {
    let value = event.target.value;
    // Eliminar caracteres que no sean dígitos y espacios, y eliminar espacios adicionales
    value = value.replace(/[^\d\s]/g, "").replace(/\s+/g, " ");
    // Eliminar espacios al principio y al final
    value = value.trimStart();
    // Actualizar el valor de heights con la cadena de texto limpia
    setHeights(value);
  };

  const calculateWaterTrapped = () => {
    const heightsArray = heights.split(" ").map(Number);
    let left = 0,
      right = heightsArray.length - 1;
    let leftMax = 0,
      rightMax = 0;
    let water = 0;

    while (left < right) {
      if (heightsArray[left] < heightsArray[right]) {
        if (heightsArray[left] >= leftMax) {
          leftMax = heightsArray[left];
        } else {
          water += leftMax - heightsArray[left];
        }
        left += 1;
      } else {
        if (heightsArray[right] >= rightMax) {
          rightMax = heightsArray[right];
        } else {
          water += rightMax - heightsArray[right];
        }
        right -= 1;
      }
    }

    setWaterTrapped(water);
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <div className="logo">
          <img
            className="logo-img"
            src="/logo_prosumia.png"
            alt="Company Logo"
          />
        </div>
        {/* ... Resto del contenido izquierdo, incluyendo el cálculo del agua atrapada */}
      </div>
      <div className="right-section">
        <div style={{ padding: "20px" }}>
          <div className="container">
            <h1>Water Trapped Calculator</h1>
            <label>
              Enter heights (separated by space):
              <input
                className="input-field"
                type="text"
                value={heights}
                onChange={handleHeightChange} // Seteo la variable heights desde el input.
              />
            </label>
            <button
              className="calculate-button"
              onClick={calculateWaterTrapped}
            >
              Calculate
            </button>
          </div>
          {waterTrapped !== null && (
            <div>
              <h2>Water Trapped: {waterTrapped} units</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
