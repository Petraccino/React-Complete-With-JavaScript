import Player from "./components/player/Player";
import TimerChallenge from "./components/timerchallenge/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Props only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
