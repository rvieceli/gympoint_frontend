import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;

  > strong {
    color: #444;
  }

  > input,
  > div > div > input {
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

    &:disabled {
      background: #f5f5f5;
    }
  }

  > input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  > span {
    color: #ee4d64;
  }
`;
