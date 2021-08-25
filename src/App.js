import React, { useEffect, useState } from 'react';

const App = () => {
  const [contar, setContar] = useState(0);

  useEffect(() => {
    document.title = [contar];
    console.log('executou');
  }, [contar]);
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
