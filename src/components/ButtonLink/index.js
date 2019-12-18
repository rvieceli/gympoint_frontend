import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton } from './styles';

export default function Button({ icon, title, type, classColor, ...rest }) {
  return (
    <CustomButton type={type} className={classColor} {...rest}>
      {icon && icon}
      {title}
    </CustomButton>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  type: PropTypes.string,
  classColor: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  title: null,
  type: 'button',
  classColor: 'red',
};
