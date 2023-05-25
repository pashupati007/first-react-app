import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted Into UpperCase!", "success")
  };

  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted Into LowerCase!", "success")
  };

  const handelClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  // Credits: A
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  // text = "newText"; // wrong way to change text
  // setText("newText"); // wrong way to change text

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handelOnChange}
            value={text}
            id="myBox"
            rows="10"
            style={{backgroundColor: props.mode === 'light'?'white':'#13466e', color: props.mode === 'dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelClearClick}>
          Clear
        </button>
        <button
        disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
        disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters{" "}
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to preview!"}</p>
      </div>
    </>
  );
}
