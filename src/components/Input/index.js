import React from 'react';
import { Input as UnformInput } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputNumber from '../InputNumber';

export default function Input({
  title,
  type,
  number,
  scale,
  name,
  placeholder,
  ...rest
}) {
  return (
    <>
      {number ? (
        <Label>
          {title && <strong>{title}</strong>}
          <InputNumber
            name={name}
            placeholder={placeholder}
            decimalScale={scale}
            {...rest}
          />
        </Label>
      ) : (
        <Label>
          {title && <strong>{title}</strong>}
          <UnformInput
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            {...rest}
          />
        </Label>
      )}
    </>
  );
}

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;

  > strong {
    color: #444;
  }

  > input {
    width: 100%;
    font-size: 16px;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #444;
    margin-top: 7px;
    margin-bottom: 5px;
    padding: 0 15px;

    ::placeholder {
      color: #999;
    }

    &:disabled {
      background: #f5f5f5;
    }
  }

  > input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  > span {
    color: #ee4d64;
  }
`;

Input.propTypes = {
  number: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  scale: PropTypes.number,
};

Input.defaultProps = {
  number: false,
  type: 'text',
  title: null,
  placeholder: null,
  scale: 0,
};
