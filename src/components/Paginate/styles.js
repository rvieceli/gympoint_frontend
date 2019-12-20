import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  height: 35px;

  > strong {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;

    color: #ee4d64;

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

    color: #ee4d64;

    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  > a,
  > div {
    margin: 0 20px;
    font-size: 16px;
    font-weight: bold;

    height: 35px;
    width: 35px;

    background: #ee4d64;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      color: #fff;
    }
  }

  > a:hover {
    background: ${darken(0.2, '#ee4d64')};
  }
`;
