import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ee4d64;

  height: 35px;

  > strong {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;

    color: #ee4d64;
    background: #fff;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;
    border-radius: 50%;

    border: 2px solid #ee4d64;
  }

  > span {
    margin-right: 20px;

    font-size: 14px;
    font-weight: bold;

    color: #fff;

    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  > a,
  > div {
    margin: 0 20px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;
