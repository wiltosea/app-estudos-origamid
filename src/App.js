import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Lista from './Lista/Lista';

const App = () => {
  const Titulo = ({ cor, texto, children }) => {
    return (
      <h1 style={{ color: cor }}>
        {texto}, {children}
      </h1>
    );
  };

  return (
    <>
      <Header />
      <Titulo texto="Login" cor="#99d" />
      <p>Conteúdo do site</p>
      <Form />
      <Lista />
      <Footer />
    </>
  );
};
export default App;
