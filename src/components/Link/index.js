import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from './styles';

export default function Button({ title, classColor, ...rest }) {
  return (
    <CustomLink className={classColor} {...rest}>
      {title}
    </CustomLink>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  classColor: PropTypes.string,
};

Button.defaultProps = {
  title: null,
  classColor: 'blue',
};
