import React from 'react';
import { Input as UnformInput } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import InputNumber from '../InputNumber';
import InputDate from '../InputDate';
import InputSelect from '../InputSelect';
import InputSelectAsync from '../InputSelectAsync';

import { Label } from './styles';

export default function Input({
  title,
  type,
  scale,
  name,
  placeholder,
  ...rest
}) {
  function renderInput() {
    switch (type) {
      case 'number':
        return (
          <InputNumber
            name={name}
            placeholder={placeholder}
            decimalScale={scale}
            {...rest}
          />
        );

      case 'date':
        return (
          <InputDate name={name} placeholderText={placeholder} {...rest} />
        );

      case 'select':
        return <InputSelect name={name} placeholder={placeholder} {...rest} />;

      case 'selectSync':
        return (
          <InputSelectAsync name={name} placeholder={placeholder} {...rest} />
        );

      default:
        return (
          <UnformInput
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            {...rest}
          />
        );
    }
  }

  return (
    <Label>
      {title && <strong>{title}</strong>}
      {renderInput()}
    </Label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  scale: PropTypes.number,
};

Input.defaultProps = {
  title: null,
  placeholder: null,
  scale: 0,
};
