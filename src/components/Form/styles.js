import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px;

  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;

  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > * + *:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 30px 0 20px 0;

  > strong {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }
`;
