import FollowerCounter from './components/FollowerCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <FollowerCounter
        socialNetwork="Twitter"
        followers={12000}
        followerWord="Followers"
      />
      <FollowerCounter
        socialNetwork="YouTube"
        followers={5000}
        followerWord="Subscribers"
      />
      <FollowerCounter
        socialNetwork="Facebook"
        followers={7500}
        followerWord="Friends"
      />
    </div>
  );
}

export default App;
