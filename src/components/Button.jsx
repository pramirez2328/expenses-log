import React from "react";
import "./Button.css";
function Button({ onDelete, id }) {
  return (
    <div>
      <button className="delete__button" onClick={() => onDelete(id)}>
        delete
      </button>
    </div>
  );
}

export default Button;
