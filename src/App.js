import React from 'react';
import Header from './Header';
import Home from './Home';
import ProdutosPagina from './ProdutosPagina';

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/ProdutosPagina') {
    Component = ProdutosPagina;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};
export default App;
