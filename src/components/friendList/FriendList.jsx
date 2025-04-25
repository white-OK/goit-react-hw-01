import css from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.container}>
        {friends.map((friend) => (
          <li className={css.item} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default FriendList;
