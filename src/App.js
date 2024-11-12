import {useState} from 'react';

function App() {
  const [time, settime] = useState(0);
  const [intervaltracker, setintervaltracker] = useState(-1);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `Time: ${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <>
      <h1>stopwacth</h1>
      <span>{formatTime(time)}</span>
      {intervaltracker===-1 ? (<button onClick={() => {
        
          const intervalId=setInterval(() => {
            settime(t => t + 1)
          }, 1000)
          setintervaltracker(intervalId);
        
      }}
      >Start</button>) :(
        <button onClick={() => {
          clearInterval(intervaltracker);
          setintervaltracker(-1); 
        }}>Stop</button>
        // <h4>new one</h4>
      )}
      <button onClick={() => {
        clearInterval(intervaltracker);
        setintervaltracker(-1); 
        settime(0);
      }}>Reset</button>

    </>



  );
}

export default App;
