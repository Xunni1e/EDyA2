import React from 'react';

const FormInput = ({ label, type, style, ...props }) => {
  return (
    <div >
      <label>{label}</label>
      <input type={type} {...props} style={style} />
    </div>
  );
};

export default FormInput