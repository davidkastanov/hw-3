

function App() {
  return (
    <>
      <Container>
        <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}

export default App;