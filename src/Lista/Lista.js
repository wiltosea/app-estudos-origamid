import React from 'react';

const Lista = () => {
  const arr = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
  return (
    <ul>
      {arr.map((item, key) => {
        return <li key={key}>item</li>;
      })}
    </ul>
  );
};

export default Lista;
