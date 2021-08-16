import React from 'react';
import reactDom from 'react-dom';
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;
  const totalGasto = dados.compras
    .map((el) => parseInt(el.preco.substr(3)))
    .reduce((acc, el) => acc + el);
  return (
    <>
      <p>
        <b>Nome: </b>
        {dados.cliente}
      </p>
      <p>
        <b>Idade: </b>
        {dados.idade}
      </p>
      <p>
        <b>Situação: </b>
        {dados.ativa ? (
          <span style={{ color: 'green' }}>Ativa</span>
        ) : (
          <span style={{ color: 'red' }}>Inativa</span>
        )}
      </p>
      <p>
        <b>Total Gasto: </b>
        {totalGasto}
      </p>
      <p>
        <b>{totalGasto > 10000 && 'Você está gastando muito'}</b>
      </p>
    </>
  );
};

export default App;
