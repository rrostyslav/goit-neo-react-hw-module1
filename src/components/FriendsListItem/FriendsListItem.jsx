import css from './FriendsListItem.module.css';
import cn from 'clsx';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={cn(css.status, {
          [css['text-green']]: isOnline,
          [css['text-red']]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
