import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import schema from './validation';

export default function ResetPassword({ match }) {
  const { token } = match.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  function clean() {
    setLoading(true);
    setError(null);
  }

  async function handleSubmit({ email, password, confirmPassword }) {
    clean();
    try {
      await api.put(`forgot-password/${token}`, {
        email,
        password,
        confirmPassword,
      });

      setMessage('Senha alterada com sucesso!');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.error);
    }
  }
  return (
    <>
      <img src={logo} alt="GYMPOINT" />

      {message ? (
        <div className="reseted-password">
          <p>{message}</p>
          <Link to="/">Fazer login agora</Link>
        </div>
      ) : (
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

          {error && <span>{error}</span>}

          <button type="submit">
            {loading ? 'Carregando' : 'Altere a minha senha'}
          </button>
        </Form>
      )}
    </>
  );
}

ResetPassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
