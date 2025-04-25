import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.usertag}>@{tag}</p>
        <p className={css.usertag}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemtitle}>Followers</span>
          <span className={css.itemlikes}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemtitle}>Views</span>
          <span className={css.itemlikes}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemtitle}>Likes</span>
          <span className={css.itemlikes}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
