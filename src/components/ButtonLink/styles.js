import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  font-size: 14px;
  font-weight: bold;
  text-align: center;

  border: none;
  background: none;

  &.red {
    color: #ee4d64;

    &:hover {
      color: ${darken(0.2, '#ee4d64')};
    }
  }

  &.gray {
    color: #ccc;

    &:hover {
      color: ${darken(0.2, '#ccc')};
    }
  }

  &.green {
    color: #42cb59;

    &:hover {
      color: ${darken(0.2, '#42cb59')};
    }
  }

  &.blue {
    color: #4d85ee;

    &:hover {
      color: ${lighten(0.2, '#4D85EE')};
    }
  }
`;
