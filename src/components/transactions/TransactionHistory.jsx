import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <section className={css.transaction}>
      <div className={css.container}>
        <table className={css.transaction__history}>
          <thead>
            <tr>
              <th className={css.transaction__header}>Тип</th>
              <th className={css.transaction__header}>Сума</th>
              <th className={css.transaction__header}>Валюта</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td className={css.transaction__cell}>{type}</td>
                <td className={css.transaction__cell}>{amount}</td>
                <td className={css.transaction__cell}>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};