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
  width: 400px;
  padding: 20px;
  height: 470px;

  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  > div.header {
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

  > div.empty {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 40px;

      strong {
        color: #444;
        font-size: 14px;
      }

      span {
        color: #999;
      }
    }
  }
`;

export const Refresh = styled(MdRefresh)`
  animation: ${props => (props.loading ? rotate : 'none')} 1.5s linear infinite;
`;
