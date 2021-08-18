import React, { useState } from 'react';

const App = () => {
  const [contar, setContar] = useState(1);
  const [itens, setItens] = useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItens((itens) => [...itens, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      <ul>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};
export default App;
