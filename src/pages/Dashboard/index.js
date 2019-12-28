import React from 'react';

import { LastCheckIns, Statistics } from '../../components';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <LastCheckIns />
      <Statistics />
    </Container>
  );
}
