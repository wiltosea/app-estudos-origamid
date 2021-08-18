import React, { useState } from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = useState(false);
  const [itens, setItens] = useState('teste');
  function handleClick() {
    setItens('outro');
  }
  return (
    <>
      <p>{itens}</p>
      <button onClick={handleClick}>adicionar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};
export default App;
