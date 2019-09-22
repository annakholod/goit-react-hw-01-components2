import React from 'react';
import PropTypes from 'prop-types';
import style from './pricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <li className={style.item}>
    <div className={style.pricingItem}>
      <i className={style.icon} style={{ backgroundImage: `url(${icon})` }} />
      <h2 className={`${style.label} ${style[`label${label}`]}`}>{label}</h2>
      <p className={style.capacity}>{capacity} Storage</p>
      <p className={style.description}>{description}</p>
      <p className={style.price}>${price}/MO</p>
      <button
        type="button"
        className={`${style.button} ${style[`button${label}`]}`}
      >
        Get Started
      </button>
    </div>
  </li>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
