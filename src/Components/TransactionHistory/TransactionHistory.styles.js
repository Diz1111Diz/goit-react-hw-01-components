import styled from "styled-components";

export const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  min-height: auto;
  border: 1px solid #a5a4a4;

  box-shadow: 0px 4px 7px 1px #cfcfcf;
  background-color: #fff;
  text-align: center;
  color: #747474;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  height: 50px;
`;
export const TableRow = styled.tr`
  height: 40px;
`;
export const TableHeader = styled.th``;

export const TableBody = styled.tbody`
  background-color: #ecf1f4;
  height: 40px;
`;

export const TableData = styled.td`
  text-align: left;
  transform: translateX(40%);
`;
