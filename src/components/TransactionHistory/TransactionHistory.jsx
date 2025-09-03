import css from './TransactionHistory.module.css';

const capitalizeFirst = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          // note: use something more unique than index when data is not static
          <tr key={index}>
            <td>{capitalizeFirst(transaction.type)}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
