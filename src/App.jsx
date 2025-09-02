import userData from '@/userData.json';
import friends from '@/friends.json';
import transactions from '@/transactions.json';
import Profile from '@/components/Profile';
import FriendsList from '@/components/FriendsList';
import TransactionHistory from '@/components/TransactionHistory/index.js';

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
      <TransactionHistory transactions={transactions} />
    </>
  );
}
