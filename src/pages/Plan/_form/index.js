import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import Form from '../../../components/Form';
import { Inline } from '../../../components/Inline';
import Input from '../../../components/Input';

import schema from './validation';

export default function _form({ data, onSubmit, title }) {
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (data) {
      setDuration(data.duration);
      setPrice(data.price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const total = useMemo(() => parseFloat(duration) * parseFloat(price) || 0, [
    duration,
    price,
  ]);

  return (
    <Form
      backUrl="/plans"
      title={title}
      schema={schema}
      onSubmit={onSubmit}
      initialData={data}
    >
      <Input title="TÍTULO" name="title" type="text" placeholder="Gold" />
      <Inline>
        <Input
          title="DURAÇÃO (em meses)"
          name="duration"
          type="number"
          onChange={e => setDuration(e)}
        />
        <Input
          title="PREÇO MENSAL"
          name="price"
          type="number"
          scale={2}
          prefix="R$ "
          onChange={e => setPrice(e)}
        />
        <Input
          title="PREÇO TOTAL"
          name="total"
          type="number"
          scale={2}
          prefix="R$ "
          value={total}
          disabled
        />
      </Inline>
    </Form>
  );
}

_form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

_form.defaultProps = {
  data: {
    duration: null,
    price: null,
  },
};
