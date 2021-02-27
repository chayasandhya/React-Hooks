import React, { useRef, useEffect, Fragment } from "react";

function UseRefExmpl() {
  /* const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []); */
  const focusPoint = useRef(null);
  const clickHandler = () => {
    focusPoint.current.value = "Focuse ME Da lusu";
    focusPoint.current.focus();
  };

  return (
    <div>
      <button onClick={clickHandler}>Action</button>
      <textarea ref={focusPoint} />

      <label>Click on the action button to focus and populate the text.</label>
      <br />
    </div>
  );
}

export default UseRefExmpl;
