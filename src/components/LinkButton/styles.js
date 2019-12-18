import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const CustomLink = styled(Link)`
  color: #fff;
  display: flex;
  height: 36px;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  font-size: 14px;
  font-weight: bold;
  text-align: center;

  border: none;
  border-radius: 4px;

  &.red {
    background: #ee4d64;

    &:hover {
      background: ${darken(0.2, '#ee4d64')};
    }
  }

  &.gray {
    background: #ccc;

    &:hover {
      background: ${darken(0.2, '#ccc')};
    }
  }

  &.green {
    background: #42cb59;

    &:hover {
      background: ${darken(0.2, '#42cb59')};
    }
  }

  &.blue {
    background: #4d85ee;

    &:hover {
      background: ${darken(0.2, '#4D85EE')};
    }
  }
`;
