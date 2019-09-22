import React from 'react';
import PropTypes from 'prop-types';
import style from './friendListItem.module.css';
import { checkStatus } from '../../../helpers/helpers';

const FriendListItem = ({ avatar, alt, name, isOnline }) => (
  <li className={style.item}>
    <span className={`${checkStatus(style, isOnline)}`} />
    <img className={style.avatar} src={avatar} alt={alt} width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  alt: 'user avatar',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
