import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    font-size: 16px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #444;
    margin-top: 7px;
    margin-bottom: 5px;
    padding-left: 30px;
    padding-right: 15px;

    ::placeholder {
      color: #999;
    }
  }

  svg {
    height: 18px;
    width: 18px;
    position: absolute;
    color: #999;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;
