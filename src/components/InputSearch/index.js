import React from 'react';
import { FaSearch } from 'react-icons';

// import { Container } from './styles';

export default function InputSearch() {
  return (
    <div>
      <input type="text" name="search" id="search" />
      <FaSearch />
    </div>
  );
}
