import "./App.css";
import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("Here is some example text.");
  const [conversionMode, setConversionMode] = useState("lowercase");
  const [textOutput, setTextOutput] = useState("");

  const handleRadioChange = (event) => {
    setConversionMode(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!textInput) return;

    let transformedText;

    switch (conversionMode) {
      case "uppercase":
        transformedText = textInput.toUpperCase();
        break;
      case "lowercase":
        transformedText = textInput.toLowerCase();
        break;
      default:
        break;
    }

    setTextOutput(transformedText);
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-0"
            value="lowercase"
            checked={conversionMode === "lowercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">Convert text to lowercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value="uppercase"
            checked={conversionMode === "uppercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to uppercase</label>
        </div>
        <button type="submit">Submit</button>
        <div className="form-control form-control__text u-mt-3">
          <label htmlFor="result">Converted text:</label>
          <output id="result" className="result">
            {textOutput}
          </output>
        </div>
      </form>
    </div>
  );
}

export default App;
