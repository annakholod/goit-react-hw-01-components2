import React from 'react';
import PropTypes from 'prop-types';
import style from './PricingItem.module.css';

const labelColor = {
  silver: '#c0c0c0',
  bronze: '#dd7c4b',
  gold: '#dda431',
};

const classColor = colorName => {
  const colorNameLowerCase = colorName.toLowerCase();
  const colorKey = Object.keys(labelColor);
  return labelColor[colorKey.find(el => el === colorNameLowerCase)];
};

const PricingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <li className={style.item}>
      <div className={style.pricingItem}>
        <i className={style.icon} style={{ backgroundImage: `url(${icon})` }} />
        <h2 className={style.label} style={{ color: classColor(label) }}>
          {label}
        </h2>
        <p className={style.capacity}>{capacity} Storage</p>
        <p className={style.description}>{description}</p>
        <p className={style.price}>${price}/MO</p>
        <button
          type="button"
          className={style.button}
          style={{ backgroundColor: classColor(label) }}
        >
          Get Started
        </button>
      </div>
    </li>
  );
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
