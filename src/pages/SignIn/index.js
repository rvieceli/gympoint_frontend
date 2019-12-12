import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';
import history from '../../services/history';

import logo from '../../assets/logo.svg';

import schema from './validation';
import { signInSuccess } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit({ email, password }) {
    setLoading(true);
    try {
      const { data } = await api.post('sessions', { email, password });

      const { token, user } = data;

      dispatch(signInSuccess(token, user));

      history.push('/dashboard');
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
          SEU E-MAIL
          <Input type="email" name="email" placeholder="example@email.com" />
        </label>

        <label>
          SUA SENHA
          <Input type="password" name="password" placeholder="***********" />
        </label>

        {error && <span>{error}</span>}

        <button type="submit">
          {loading ? 'Carregando' : 'Entrar no sistema'}
        </button>

        <Link to="/forgot-password">Esqueci a minha senha</Link>
      </Form>
    </>
  );
}
