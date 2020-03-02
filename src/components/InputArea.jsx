import React, { useState } from "react";

function InputArea(props) {
  // State
  const [inputText, setInputText] = useState("");

  // OnChange
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      {/* On button click, add the item to array,
      and set input area back to "" */}
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
