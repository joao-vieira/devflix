import React from 'react';

function FormField({ label, type, name, value, handleChange }) {
  return (
    <div>
      <label>
        {label}:
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FormField;
