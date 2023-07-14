import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics ({ data }) {
  return (
    <section className={css.statistics}>
      <div className='container'>
        <h2 className={css.statistics__title}>Upload stats</h2>

      <ul className={css.statistics__list}>
        {data.map(({ id, label, percentage }) => (
          <li className={css.statistics__item} key={id}>
            <span className={css.statistics__label}>{label}</span>
            <span className={css.statistics__percentage}>{percentage}%</span>
          </li>
        ))}
        </ul>
        </div>
    </section>
  );
};

Statistics.propTypes = {
      data: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ).isRequired,
};