import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  div {
    background: #fff;
    border-radius: 4px;

    padding: 30px;
    min-width: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    > strong {
      color: #444;
    }

    > p {
      color: #666;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 20px;

      width: 390px;
      min-height: 50px;
      max-height: 150px;
      white-space: break-spaces;
      overflow: auto;
    }

    > textarea {
      margin-top: 10px;
      border-radius: 4px;
      border: 1px solid #ddd;

      padding: 15px;
      color: #444;
      font-size: 16px;

      min-height: 130px;
      min-width: 390px;

      &:placeholder {
        color: #666;
      }
    }

    span {
      color: #ee4d64;
      margin-top: 5px;
    }

    > button {
      margin-top: 20px;
    }
  }
`;
