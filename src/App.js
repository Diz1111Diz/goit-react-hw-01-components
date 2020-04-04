import React from "react";

import Profile from "./Components/Profile/Profile";
import user from "./db/user.json";

import Statistics from "./Components/Statistics/Statistics";
import statisticsArr from "./db/statistical-data.json";

import friends from "./db/friends.json";
import FriendList from "./Components/FriendList/FriendList";

import transactions from "./db/transactions.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticsArr} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
