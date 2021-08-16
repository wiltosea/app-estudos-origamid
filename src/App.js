import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

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
      <Titulo texto="Meu título" cor="#d3d">
        <p>Títulosão</p>
        <p>da Porra</p>
      </Titulo>
      <p>Conteúdo do site</p>
      <Form />
      <Footer />
    </>
  );
};
export default App;
