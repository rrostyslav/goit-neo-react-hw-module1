import css from './FriendsList.module.css';
import FriendListItem from '@/components/FriendsListItem/index.js';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend, index) => (
        <li key={index}>
          <FriendListItem avatar={friend.avatar} isOnline={friend.isOnline} name={friend.name} />
        </li>
      ))}
    </ul>
  );
}
