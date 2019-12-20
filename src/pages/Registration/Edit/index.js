import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../../services/api';
import history from '../../../services/history';

import AlertActions from '../../../components/AlertActions';

import Form from '../_form';

export default function Edit({ match }) {
  const { id } = match.params;

  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await api.get(`registrations/${id}`);
      setRegistration(data);
    }

    load();
  }, [id]);

  function handleSubmit({ plan_id, student_id, startDate }) {
    AlertActions.save({
      call: () =>
        api.put(`/registrations/${id}`, {
          plan_id,
          student_id,
          startDate,
        }),
      success: () => history.push('/registrations'),
    });
  }

  return (
    <>
      {registration && (
        <Form
          title="Edição de Matrícula"
          onSubmit={handleSubmit}
          data={registration}
        />
      )}
    </>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
};
