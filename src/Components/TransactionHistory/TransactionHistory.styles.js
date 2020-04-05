import styled from "styled-components";

export const Table = styled.table`
  margin: 0 auto;
  width: 75%;
  height: auto;
  box-shadow: 0px 4px 7px 1px #cfcfcf;
  background-color: #fff;
  text-align: center;
  color: #747474;
`;

export const TableHead = styled.thead`
  font-size: 13px;
  font-weight: bold;
  height: 50px;
`;
export const TableRow = styled.tr`
  height: 40px;
  &:nth-child(odd) {
    background: #ffffff;
  }
`;
export const TableHeader = styled.th`
  background-color: #00bcd5;
  color: #ffffff;
  padding: 20px 0;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: #ecf1f4;
  height: 40px;
`;

export const TableData = styled.td`
  text-transform: capitalize;
`;
