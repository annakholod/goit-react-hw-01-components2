import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={user.avatar}
          alt={user.alt ? user.alt : 'user avatar'}
          className={style.avatar}
        />
        <p className={style.name}>{user.name}</p>
        <p className={style.tag}>{user.tag}</p>
        <p className={style.location}>{user.location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statsItem}>
          <p className={style.label}>Followers</p>
          <p className={style.quantity}>{user.stats.followers}</p>
        </li>
        <li className={style.statsItem}>
          <p className={style.label}>Views</p>
          <p className={style.quantity}>{user.stats.views}</p>
        </li>
        <li className={style.statsItem}>
          <p className={style.label}>Likes</p>
          <p className={style.quantity}>{user.stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
