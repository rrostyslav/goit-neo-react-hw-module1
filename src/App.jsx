import userData from '@/userData.json';
import friends from '@/friends.json';
import Profile from '@/components/Profile';
import FriendsList from '@/components/FriendsList';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
    </>
  );
}
