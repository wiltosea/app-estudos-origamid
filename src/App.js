import React from 'react';

const App = () => {
  let ativo = true;
  function handleClick() {
    ativo = !ativo;
    console.log(ativo);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Botão ativo' : 'Botão Inativo'}
    </button>
  );
};
export default App;
