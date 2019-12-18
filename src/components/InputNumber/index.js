import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

export default function Input({ name, onChange, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.value',
        defaultValue,
        clearValue: pickerRef => {
          pickerRef.setInputValue(null);
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, fieldName]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <>
      <NumberFormat
        ref={ref}
        thousandSeparator="."
        decimalSeparator=","
        isNumericString
        fixedDecimalScale
        id={fieldName}
        name={fieldName}
        value={value}
        onValueChange={values => {
          setValue(values.floatValue);
          if (onChange) onChange(values.floatValue);
        }}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  onChange: null,
};
