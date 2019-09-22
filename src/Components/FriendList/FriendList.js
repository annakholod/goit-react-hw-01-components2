import React from 'react';
import PropTypes from 'prop-types';
import style from './friendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(el => (
      <FriendListItem
        avatar={el.avatar}
        name={el.name}
        alt={el.alt}
        isOnline={el.isOnline}
        key={el.id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      alt: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
