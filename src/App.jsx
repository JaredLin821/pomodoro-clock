import { useState } from 'react'
import Display from './Display/UI/display'
import useTimerLogic from './Timer Logic/timerLogic';


function App() {
  const [count, setCount] = useState(0)

  // inital states for timer = 40 minutes, break time = 5 minutes
    const [time, setTime] = useState(40 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [breakTime, setBreakTime] = useState(5 * 60);

    const startTimer = () => {
        setIsRunning(true);
    };
    
    const pauseTimer = () => {
        setIsRunning(false);
    };
    const resetTimer = () => {
        setIsRunning(false);
        setTime(40 * 60);
    }

useTimerLogic(isRunning, setTime);  


return (
  <>
    <div>
      <Display time={time} />
    </div>
  </>
  )
}

export default App
