import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../../services/api';
import history from '../../../services/history';

import AlertActions from '../../../components/AlertActions';

import Form from '../_form';

export default function Edit({ match }) {
  const { id } = match.params;

  const [plan, setPlan] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await api.get(`plans/${id}`);
      setPlan({
        ...data,
        total: parseFloat(data.duration) * parseFloat(data.price),
      });
    }

    load();
  }, [id]);

  function handleSubmit({ title, duration, price }) {
    console.tron.log({ title, duration, price });
    AlertActions.save({
      call: () =>
        api.put(`/plans/${id}`, {
          title,
          duration,
          price,
        }),
      success: () => history.push('/plans'),
    });
  }

  return <Form title="Edição de Planos" onSubmit={handleSubmit} data={plan} />;
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
};
