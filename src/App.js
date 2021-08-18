import React from 'react';

const App = () => {
  // const ativoHook = React.useState(true);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: 'wilson', idade: '39' });
  console.log(ativo);
  console.log(dados);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'possui curso superior' });
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? 'Botão ativo' : 'Botão Inativo'}
      </button>
    </>
  );
};
export default App;
