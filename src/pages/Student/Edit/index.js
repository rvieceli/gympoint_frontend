import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../../services/api';
import history from '../../../services/history';

import AlertActions from '../../../components/AlertActions';

import Form from '../_form';
import schema from './validation';

export default function Edit({ match }) {
  const { id } = match.params;
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await api.get(`students/${id}`);
      setStudent(data);
    }

    load();
  }, [id]);

  function handleSubmit({ name, email, age, weight, height }) {
    AlertActions.save({
      call: () =>
        api.put(`/students/${id}`, {
          name,
          email,
          age,
          weight,
          height,
        }),
      success: () => history.push('/students'),
    });
  }

  return (
    <Form
      title="Edição de Aluno"
      schema={schema}
      onSubmit={handleSubmit}
      data={student}
    />
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
};
