import React from 'react';

const DatePicker = ({ label, style, ...props }) => {
  return (
    <div >
      <label>{label}</label>
      <input type="date" {...props} style={style}/>
    </div>
  );
};

export default DatePicker;