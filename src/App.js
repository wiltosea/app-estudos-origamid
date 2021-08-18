import React from 'react';

const App = () => {
  // const ativoHook = React.useState(true);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];
  const [ativo, setAtivo] = React.useState(true);
  console.log(ativo);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Botão ativo' : 'Botão Inativo'}
    </button>
  );
};
export default App;
