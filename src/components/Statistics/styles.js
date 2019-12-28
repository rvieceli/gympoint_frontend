import styled, { keyframes } from 'styled-components';
import { MdRefresh } from 'react-icons/md';

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  padding: 20px;

  height: 470px;

  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 10px;
    border-bottom: 2px solid #666;

    strong {
      color: #444;
      font-size: 15px;
    }
  }

  ul {
    margin: 50px 0;
    height: 300px;
    display: flex;
    flex-direction: row;
    li {
      height: 100%;
      width: 150px;

      display: flex;
      flex-direction: column;

      justify-content: space-between;
      align-items: center;

      strong {
        color: #666;
        font-size: 20px;
        text-transform: uppercase;
      }

      span {
        color: #999;
        font-size: 36px;
      }
    }
  }
`;

export const Refresh = styled(MdRefresh)`
  animation: ${props => (props.loading ? rotate : 'none')} 1.5s linear infinite;
`;
