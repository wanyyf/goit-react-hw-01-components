import s from './friends.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(el => {
    return (
      <li className={el.isOnline ? s.itemOnline : s.itemOfline} key={el.id}>
        <span className={s.status}>{el.isOnline}</span>
        <img className="avatar" src={el.avatar} alt={el.name} width="48" />
        <p className="name">{el.name}</p>
      </li>
    );
  });
};

export default FriendListItem;
