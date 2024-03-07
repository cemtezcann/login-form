import "./input.css";

import React from "react";

function Input({ type, placeHolder, onChange }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
}

export default Input;
