import React from 'react';

const Input = ({ label, id, ...props }) => {
  console.log(props);
  return (
    <div style={{ margin: '10px 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
