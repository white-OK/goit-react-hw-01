import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      {isOnline ? (
        <p className={css.Online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
