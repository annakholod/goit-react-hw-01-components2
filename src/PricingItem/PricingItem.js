import React from 'react';
import PropTypes from 'prop-types';
import style from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  const classColorName = () => {
    if (label === 'Silver') {
      return style.labelSilver;
    }
    if (label === 'Bronze') {
      return style.labelBronze;
    }
    return style.labelGold;
  };

  const classColorButton = () => {
    if (label === 'Silver') {
      return style.buttonSilver;
    }
    if (label === 'Bronze') {
      return style.buttonBronze;
    }
    return style.buttonGold;
  };

  return (
    <li className={style.item}>
      <div className={style.pricingItem}>
        <i className={style.icon} style={{ backgroundImage: `url(${icon})` }} />
        <h2 className={classColorName()}>{label}</h2>
        <p className={style.capacity}>{capacity} Storage</p>
        <p className={style.description}>{description}</p>
        <p className={style.price}>${price}/MO</p>
        <button type="button" className={classColorButton()}>
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
