import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useField } from '@rocketseat/unform';

export default function InputSelectAsync({
  name,
  multiple,
  labelTitle,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(rest.defaultValue || null);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.props.value;
    if (!multiple) {
      return selectValue ? selectValue.id : '';
    }

    return selectValue ? selectValue.map(option => option.id) : [];
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      parseValue: parseSelectValue,
      defaultValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, fieldName]);

  return (
    <>
      <SelectStyled
        value={value}
        onChange={e => setValue(e)}
        name={fieldName}
        isMulti={multiple}
        ref={ref}
        getOptionValue={option => option.id}
        getOptionLabel={option => option[labelTitle]}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

InputSelectAsync.propTypes = {
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  labelTitle: PropTypes.string,
};

InputSelectAsync.defaultProps = {
  multiple: false,
  labelTitle: 'title',
};

const SelectStyled = styled(AsyncSelect)`
  margin-top: 7px;
  margin-bottom: 5px;
  > div {
    border-radius: 4px;
    border: 1px solid #ddd;
    min-height: 45px;
  }
`;
