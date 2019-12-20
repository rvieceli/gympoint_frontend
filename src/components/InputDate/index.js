import React, { useRef, useState, useEffect, useMemo } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function InputDate({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState();

  useMemo(() => {
    if (defaultValue) {
      setSelected(parseISO(defaultValue));
    }
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.selected',
        defaultValue,
        clearValue: pickerRef => {
          pickerRef.clear();
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, fieldName]);

  return (
    <>
      <ReactDatePicker
        ref={ref}
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        dateFormat="dd/MM/yyyy"
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
};
