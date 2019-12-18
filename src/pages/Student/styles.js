import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 30px 0 20px 0;

  > strong {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }
`;

export const Grid = styled.div`
  background: #fff;
  width: 100%;

  padding: 30px;

  table {
    padding: 30px;
    width: 100%;
    border-collapse: collapse;

    tbody > tr {
      height: 50px;
    }
    tbody > tr:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
  }
`;

export const Head = styled.th`
  color: #444;
  font-size: 16px;
  text-align: ${props => props.align || 'left'};
`;

export const Item = styled.td`
  color: #666;
  font-size: 16px;
  text-align: ${props => props.align || 'left'};
`;

export const Options = styled.td`
  height: 50px;

  display: flex;

  justify-content: flex-end;
  align-items: center;
`;
