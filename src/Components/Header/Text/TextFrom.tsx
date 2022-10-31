import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
  SetStateAction,
} from "react";

function TextFrom(props: {
  headding:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    console.log("on chnage");

    setText(event.target.value);
  };
  const [text, setText] = useState(" ");

  return (
    <>
    <div className="container">
      <h1> {props.headding} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows={8}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupClick}>
        {" "}
        convert to uppercase{" "}
      </button>
      <button className="btn btn-primary mx-1" onClick={handleloClick}>
        {" "}
        convert to Lowercase{" "}
      </button>
      </div>
<div className ="container my-3">
      <h2>summary count</h2>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p> {0.008* text.split (" ").length} minutes read </p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

export default TextFrom;
