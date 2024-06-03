import React from 'react';

const DatePicker = ({ label, value, onChange, style }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" value={value} onChange={onChange} style={style} />
    </div>
  );
};

export default DatePicker;