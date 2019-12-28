import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px;

  display: flex;
  flex-direction: row;

  > * + *:not(:first-child) {
    margin-left: 20px;
  }
`;
