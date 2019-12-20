import React from 'react';

import api from '../../../services/api';
import history from '../../../services/history';

import Form from '../_form';
import AlertActions from '../../../components/AlertActions';

export default function New() {
  async function handleSubmit({ plan_id, student_id, startDate }) {
    console.tron.log({ plan_id, student_id, startDate });

    AlertActions.save({
      call: () =>
        api.post('/registrations', {
          plan_id,
          student_id,
          startDate,
        }),
      success: () => history.push('/registrations'),
    });
  }

  return <Form title="Cadastro de Matrícula" onSubmit={handleSubmit} />;
}
