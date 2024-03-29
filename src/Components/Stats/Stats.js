import React from 'react';
import PropTypes from 'prop-types';
import style from './stats.module.css';
import { ramdomColor } from '../../helpers/helpers';

const Stats = ({ title, statistics }) => (
  <section className={style.statsSection}>
    {title ? <h2 className={style.title}>{title}</h2> : false}
    <ul className={style.statList}>
      {statistics.map(el => (
        <li
          className={style.item}
          key={el.id}
          style={{ backgroundColor: ramdomColor() }}
        >
          <p className={style.label}>{el.label}</p>
          <p className={style.percentage}>{el.percentage} %</p>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};

export default Stats;
