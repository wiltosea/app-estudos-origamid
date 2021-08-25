import React, { useEffect, useState } from 'react';

const App = () => {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((result) => {
        setProduto(result);
        return console.log(produto);
      });
    console.log('executou');
  }, [produto]);
  return (
    <div>
      <button onClick={(nomeProduto = 'notebook')}>notebook</button>
      <span> </span>
      <button>smartphone</button>
    </div>
  );
};

export default App;

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
