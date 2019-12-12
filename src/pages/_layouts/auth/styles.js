import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;

  background: #fff;
  border-radius: 4px;

  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  padding: 30px 0;

  img {
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    label {
      margin: 5px 0;
      text-align: start;
      font-weight: bold;
      color: #444;
    }

    input {
      width: 100%;
      font-size: 16px;
      height: 45px;
      border-radius: 4px;
      border: 1px solid #ddd;
      color: #444;
      margin-top: 7px;
      margin-bottom: 5px;
      padding: 0 15px;

      ::placeholder {
        color: #999;
      }
    }

    span {
      color: #ee4d64;
      font-weight: normal;
    }

    span.success {
      color: #42cb59 !important;
      font-weight: normal;
    }

    button {
      height: 45px;
      background-color: #ee4d64;
      border-radius: 4px;
      border: none;

      font-size: 16px;
      font-weight: bold;
      color: #fff;
      margin: 5px 0;

      transition: background-color 1s;

      &:hover {
        background-color: ${darken(0.1, '#ee4d64')};
      }
    }

    a {
      color: #ee4d64;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 20px;
      transition: color 1s;

      &:hover {
        color: ${darken(0.2, '#ee4d64')};
      }
    }
  }

  div.reseted-password {
    margin: 0 20px;

    > p {
      color: #42cb59;
    }

    > a {
      background: #42cb59;
      color: #fff;
      display: flex;
      height: 45px;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      border-radius: 4px;
      margin: 10px 0;
    }
  }
`;
