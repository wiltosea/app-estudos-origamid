import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const App = () => {
  function handleClick(event) {
    return console.log(event.clientX);
  }

  return (
    <>
      <Header />
      <p>Conteúdo do site</p>
      <Form />
      <Footer />
    </>
  );
};
export default App;
