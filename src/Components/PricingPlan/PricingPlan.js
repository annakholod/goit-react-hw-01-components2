import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import style from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={style.pricingPlan}>
      {items.map(el => (
        <PricingItem
          label={el.label}
          icon={el.icon}
          capacity={el.capacity}
          price={el.price}
          description={el.description}
          key={el.label}
        />
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
