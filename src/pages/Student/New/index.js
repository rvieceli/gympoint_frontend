import React from 'react';

import api from '../../../services/api';
import history from '../../../services/history';

import AlertActions from '../../../components/AlertActions';

import Form from '../_form';

export default function New() {
  async function handleSubmit({ name, email, age, weight, height }) {
    AlertActions.save({
      call: () =>
        api.post('/students', {
          name,
          email,
          age,
          weight,
          height,
        }),
      success: () => history.push('/students'),
    });
  }

  return <Form title="Cadastro de Aluno" onSubmit={handleSubmit} />;
}
