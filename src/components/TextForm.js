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

  const handleTitlecaseClick = () => {
    let sentences = text.toLowerCase().split("\n");
    let newSentences = [];
    sentences.forEach((sentence) => {
      let words = sentence.split(" ");
      let newWords = [];
      words.forEach((word) => {
        let newWord = word.charAt(0).toUpperCase() + word.substring(1);
        newWords.push(newWord);
      });
      newSentences.push(newWords.join(" "));
    });

    let newText = newSentences.join("\n");
    setText(newText);
  };

  const handleSentencecaseClick = () => {
    let paragraphs = text.toLowerCase().split("\n");
    let newParagraphs = [];
    paragraphs.forEach((paragraph) => {
      let sentences = paragraph.split(". ");
      let newSentences = [];
      sentences.forEach((sentence) => {
        let newSentence =
          sentence.charAt(0).toUpperCase() + sentence.substring(1);
        newSentences.push(newSentence);
      });
      newParagraphs.push(newSentences.join(". "));
    });

    let newText = newParagraphs.join("\n");
    setText(newText);
  };

  const handleInversecaseClick = () => {
    let shouldBeUpper = true;
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (shouldBeUpper) {
        newText += text.charAt(i).toUpperCase();
        shouldBeUpper = false;
      } else {
        newText += text.charAt(i).toLowerCase();
        shouldBeUpper = true;
      }
    }

    setText(newText);
  };

  const handleCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(text);
    } catch {
      document.getElementById("myBox").select();
      document.execCommand("copy");
    }
  };

  const handleOnChanged = (event) => {
    const newText = event.target.value;
    setText(newText);
    const newNumOfWords = countNumOfWords(newText);
    setNumOfWords(newNumOfWords);
    const newTimeToRead = Math.ceil(newNumOfWords * 0.008);
    setTimeToRead(newTimeToRead);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    setNumOfWords(0);
    setTimeToRead(0);
  };

  function countNumOfWords(_text) {
    let wordCount = 0;
    let sentences = _text.split("\n");

    sentences.forEach((sentence) => {
      let words = sentence.split(" ");
      words.forEach((word) => {
        if (word !== "") wordCount++;
      });
    });

    return wordCount;
  }

  const [text, setText] = useState("");
  const [numOfWords, setNumOfWords] = useState(0);
  const [TimeToRead, setTimeToRead] = useState(0);

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
        <button className="btn btn-primary mx-2" onClick={handleTitlecaseClick}>
          Convert to Titlecase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleSentencecaseClick}
        >
          Convert to Sentencecase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleInversecaseClick}
        >
          Convert to Inversecase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCopyToClipboard}
        >
          Copy to clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
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
