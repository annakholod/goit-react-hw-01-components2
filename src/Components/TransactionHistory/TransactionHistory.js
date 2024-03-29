import React from 'react';
import PropTypes from 'prop-types';
import style from './transactionHistory.module.css';

const TransactionHistory = ({ historyItems }) => (
  <div>
    {historyItems.length && (
      <table className={style.transactionHistory}>
        <thead className={style.tableHeader}>
          <tr className={style.tableRow}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {historyItems.map(el => (
            <tr className={style.tBodyRow} key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

TransactionHistory.propTypes = {
  historyItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
