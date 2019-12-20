import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useField } from '@rocketseat/unform';

export default function InputSelect({
  name,
  options,
  multiple,
  labelTitle,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value;
    if (!multiple) {
      return selectValue ? selectValue.id : '';
    }

    return selectValue ? selectValue.map(option => option.id) : [];
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, fieldName]);

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  }

  return (
    <>
      <SelectStyled
        name={fieldName}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
        getOptionValue={option => option.id}
        getOptionLabel={option => option[labelTitle]}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.any.isRequired,
  multiple: PropTypes.bool,
  labelTitle: PropTypes.string,
};

InputSelect.defaultProps = {
  multiple: false,
  labelTitle: 'title',
};

const SelectStyled = styled(Select)`
  margin-top: 7px;
  margin-bottom: 5px;
  > div {
    border-radius: 4px;
    border: 1px solid #ddd;
    min-height: 45px;
  }
`;
