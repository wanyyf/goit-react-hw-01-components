import propTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.array,
};
export default FriendList;
