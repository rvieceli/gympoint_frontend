import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../../components/Form';

import { Inline } from '../../../components/Inline';
import Input from '../../../components/Input';

import schema from './validation';

export default function _form({ data, onSubmit, title }) {
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
        <Input title="IDADE" type="number" name="age" />
        <Input
          title="PESO (em kg)"
          type="number"
          scale={1}
          suffix=" kg"
          name="weight"
        />
        <Input
          title="ALTURA"
          type="number"
          scale={2}
          suffix=" m"
          name="height"
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
