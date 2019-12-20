import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function InputSearch({ ...rest }) {
  return (
    <Container>
      <input type="text" {...rest} />
      <MdSearch />
    </Container>
  );
}
