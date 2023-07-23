import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChanged = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
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
      <button className="btn btn-primary" onClick={handleUppercaseClick}>
        Convert to Uppercase
      </button>
    </>
  );
}
