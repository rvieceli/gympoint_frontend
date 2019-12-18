import React from 'react';

import api from '../../../services/api';
import history from '../../../services/history';

import Form from '../_form';
import AlertActions from '../../../components/AlertActions';

import schema from './validation';

export default function New() {
  async function handleSubmit({ title, duration, price }) {
    AlertActions.save({
      call: () =>
        api.post('/plans', {
          title,
          duration,
          price,
        }),
      success: () => history.push('/plans'),
    });
  }

  return (
    <Form title="Cadastro de Plano" schema={schema} onSubmit={handleSubmit} />
  );
}
