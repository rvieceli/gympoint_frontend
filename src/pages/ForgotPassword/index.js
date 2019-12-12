import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import schema from './validation';

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  function clean() {
    setLoading(true);
    setError(null);
    setMessage(null);
  }

  async function handleSubmit({ email }) {
    clean();
    try {
      const { data } = await api.post('forgot-password', {
        email,
        endpoint: `${process.env.REACT_APP_BASE_URL ||
          'http://localhost:3000'}/forgot-password/%token%/reset`,
      });

      setLoading(false);
      setMessage(data.message);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.error);
    }
  }

  return (
    <>
      <img src={logo} alt="GYMPOINT" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label>
          SEU E-MAIL {process.env.REACT_APP_BASE_URL}
          <Input type="email" name="email" placeholder="example@email.com" />
        </label>

        {error && <span>{error}</span>}
        {message && <span className="success">{message}</span>}

        <button type="submit">
          {loading ? 'Carregando' : 'Enviar e-mail para recuperação'}
        </button>

        <Link to="/">Lembrei a senha</Link>
      </Form>
    </>
  );
}
