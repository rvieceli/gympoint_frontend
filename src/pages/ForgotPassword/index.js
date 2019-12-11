import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

export default function ForgotPassword() {
  function handleSubmit({ email }) {
    console.tron.log(email);
  }

  return (
    <>
      <img src={logo} alt="GYMPOINT" />

      <Form onSubmit={handleSubmit}>
        <label>
          SEU E-MAIL
          <Input type="email" name="email" placeholder="example@email.com" />
        </label>

        <button type="submit">Enviar e-mail para recuperação</button>

        <Link to="/">Lembrei a senha</Link>
      </Form>
    </>
  );
}
