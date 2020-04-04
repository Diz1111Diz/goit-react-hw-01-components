import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
  TableBody,
} from "./TransactionHistory.styles";

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>TYPE</TableHeader>
          <TableHeader>AMOUNT</TableHeader>
          <TableHeader>CURRENCY</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

TransactionHistory.defaultProps = {
  // bla: 'test',
};

export default TransactionHistory;
