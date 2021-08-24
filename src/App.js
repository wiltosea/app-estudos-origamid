import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    console.log(dados);
    setCarregando(false);
  }

  return (
    <>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>
      {carregando && <p>carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
      {!dados && !carregando && <p>Selecione um produto</p>}
    </>
  );
};

export default App;
