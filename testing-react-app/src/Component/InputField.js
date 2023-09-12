import React from 'react';

function InputField({ name, value, onChange }) {
  return (
    <input class="input"
      type="number"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputField;
