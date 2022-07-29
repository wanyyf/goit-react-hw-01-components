import propTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend}>
      {friends.map(el => {
        const { avatar, name, isOnline, id } = el;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.prototype = {
  friends: propTypes.array,
};
export default FriendList;
