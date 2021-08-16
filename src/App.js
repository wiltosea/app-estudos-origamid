import React from 'react';

const App = () => {
  function handleClick(event) {
    return console.log(event.clientX);
  }

  function handleClickDireito(event) {
    return alert('não');
  }
  return (
    <>
      <button onMouseMove={handleClick}>Clique</button>
      <button onClick={(event) => console.log(event)}>Clique</button>
    </>
  );
};
export default App;
