import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChanged = (event) => {
    setText(event.target.value);
    setNumOfWords(text === "" ? 0 : text.split(" ").length);
    setTimeToRead(Math.ceil(numOfWords * 0.008));
  };

  const [text, setText] = useState("Enter text here!");
  const [numOfWords, setNumOfWords] = useState(text.split(" ").length);
  const [TimeToRead, setTimeToRead] = useState(Math.ceil(numOfWords * 0.008));

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChanged}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>
          {numOfWords} {numOfWords <= 1 ? "word" : "words"} and {text.length}{" "}
          characters.
        </p>
        <p>
          {TimeToRead} {TimeToRead <= 1 ? "minute" : "minutes"} read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
