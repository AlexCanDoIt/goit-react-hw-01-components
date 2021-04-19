import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './default-avatar.png';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={styles.item}>
        <span
          className={isOnline ? styles.statusGreen : styles.statusRed}
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`Аватарка ${name}`}
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  avatar: defaultAvatar,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
