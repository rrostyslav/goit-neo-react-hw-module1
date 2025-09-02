import css from './FriendsListItem.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={css.name}>{name}</p>
      <p className={css.status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
