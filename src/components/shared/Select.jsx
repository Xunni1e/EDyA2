import React from 'react';

const Select = ({ label, options, style, ...props }) => {
  return (
    <div >
      <label>{label}</label>
      <select {...props} style={style}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;