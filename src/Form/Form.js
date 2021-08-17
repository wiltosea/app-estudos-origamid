import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <Input id="email" label="Email" required />
      <Input id="senha" label="Senha" type="password" />
      <Button texto="Enviar" />
    </form>
  );
};

export default Form;
