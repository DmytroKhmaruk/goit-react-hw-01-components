import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import Friends from "./friends/Friends";
import TransactionHistory from "./transactions/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from './data/friends.json';
import transactions from "./data/transactions.json";


export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics data={data} />
      
      <Friends friends={friends} />
      
      <TransactionHistory transactions={transactions}/>
    </div>
  );
}