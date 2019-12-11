import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

import schema from './validation';

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.tron.log(email, password);
  }

  return (
    <>
      <img src={logo} alt="GYMPOINT" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label>
          SEU E-MAIL
          <Input type="email" name="email" placeholder="example@email.com" />
        </label>

        <label>
          SUA SENHA
          <Input type="password" name="password" placeholder="***********" />
        </label>

        <button type="submit">Entrar no sistema</button>

        <Link to="/forgot-password">Esqueci a minha senha</Link>
      </Form>
    </>
  );
}
