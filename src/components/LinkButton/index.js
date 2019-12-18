import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from './styles';

export default function Button({ icon, title, classColor, ...rest }) {
  return (
    <CustomLink className={classColor} {...rest}>
      {icon && icon}
      {title}
    </CustomLink>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  classColor: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  title: null,
  classColor: 'red',
};
