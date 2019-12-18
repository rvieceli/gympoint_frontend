import styled from 'styled-components';

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 100%;

  > * + *:not(:first-child) {
    margin-left: 15px;
  }
`;
