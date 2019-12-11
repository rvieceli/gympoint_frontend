import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

import schema from './validation';

export default function ResetPassword() {
  function handleSubmit({ email, password, confirmPassword }) {
    console.tron.log(email, password, confirmPassword);
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
          NOVA SENHA
          <Input type="password" name="password" placeholder="***********" />
        </label>

        <label>
          CONFIRME A SENHA
          <Input
            type="password"
            name="confirmPassword"
            placeholder="***********"
          />
        </label>

        <button type="submit">Altere a minha senha</button>
      </Form>
    </>
  );
}
