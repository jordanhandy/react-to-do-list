import React from "react";

function ToDoItem(props) {
  return (
    <div
      // trigger on item click
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
