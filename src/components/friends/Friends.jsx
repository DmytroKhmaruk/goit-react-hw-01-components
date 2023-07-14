import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function Friends({ friends }) {
  return (
    <section className={css.friends}>
      <div>
        <ul className={css.friends__list}>
          {friends.map(({ id, avatar, name, isOnline }) => (
            <li
              className={css.friends__item}
              key={id}
            >
              <img className={css.friends__avatar} src={avatar} alt="User avatar" width="48" />
              <p className={css.friends__name}>{name}</p>
              <span className={css.friends__status}>
                {isOnline ? <span className="green">🟢</span> : <span className="red">🔴</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};