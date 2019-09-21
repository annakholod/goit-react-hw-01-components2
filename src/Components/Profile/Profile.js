import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({
  avatar,
  alt,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={alt} className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statsItem}>
          <p className={style.label}>Followers</p>
          <p className={style.quantity}>{followers}</p>
        </li>
        <li className={style.statsItem}>
          <p className={style.label}>Views</p>
          <p className={style.quantity}>{views}</p>
        </li>
        <li className={style.statsItem}>
          <p className={style.label}>Likes</p>
          <p className={style.quantity}>{likes}</p>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  alt: 'user avatar',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
