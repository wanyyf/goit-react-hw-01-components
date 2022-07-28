import propTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.array.isRequired,
};
export default FriendList;
