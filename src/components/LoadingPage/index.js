import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/lottie-loading.json';

import { Container } from './styles';

export default function LoadingPage() {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoPlay: true,
          animationData,
        }}
        width={426}
        height={290}
      />
    </Container>
  );
}
