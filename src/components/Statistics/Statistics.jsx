import s from './statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={s.statlist}>
        {stats.map(el => {
          return (
            <li className={s.item} key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};

export default Statistics;
