import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    height: 100%;
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: baseline;

    li > a {
      margin-left: 20px;
      color: #999;
      font-size: 15px;
      font-weight: bold;

      &:hover {
        color: #444;
      }
    }

    li > a.principal {
      color: #444 !important;

      &:hover {
        color: #999 !important;
      }
    }

    li > a.logo {
      color: #ee4d64 !important;
      margin-left: 13px;
      padding-right: 30px;
      margin-right: 10px;

      border-right: 1px solid #ddd;
      &:hover {
        color: ${darken(0.2, '#ee4d64')} !important;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

  strong {
    color: #444;
    font-size: 14px;
    font-weight: bold;
  }

  button {
    font-size: 14px;
    color: #ee4d64;
    border: none;
    background: none;

    &:hover {
      color: ${darken(0.2, '#ee4d64')};
    }
  }
`;
