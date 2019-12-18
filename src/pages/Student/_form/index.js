import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../../components/Form';

import { Inline } from '../../../components/Inline';
import Input from '../../../components/Input';

export default function _form({ data, schema, onSubmit, title }) {
  return (
    <Form
      backUrl="/students"
      title={title}
      schema={schema}
      onSubmit={onSubmit}
      initialData={data}
    >
      <Input
        title="NOME COMPLETO"
        name="name"
        type="text"
        placeholder="John Doe"
      />
      <Input
        title="E-MAIL"
        name="email"
        type="email"
        placeholder="example@email.com"
      />
      <Inline>
        <Input title="IDADE" number name="age" />
        <Input
          title="PESO (em kg)"
          number
          scale={1}
          suffix=" kg"
          name="weight"
        />
        <Input title="ALTURA" number scale={2} suffix=" m" name="height" />
      </Inline>
    </Form>
  );
}

_form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object,
  data: PropTypes.shape({
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

_form.defaultProps = {
  schema: null,
  data: {
    duration: null,
    price: null,
  },
};
