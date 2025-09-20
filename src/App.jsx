import { useState } from 'react'
import Display from './Display/UI/display'
import useTimerLogic from './Timer Logic/timerLogic';


function App() {
  // inital states for timer = 40 minutes, break time = 10 minutes
    const [time, setTime] = useState(40 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [breakTime, setBreakTime] = useState(10 * 60);
    const [mode, setMode] = useState("work");
    const [cycleCount, setCycleCount] = useState(0);
    window.setPomodoroTime = (seconds) => setTime(seconds);
    window.setWorkTime = (seconds) => {
        if (mode === "work") setTime(seconds);
    };

    useTimerLogic(isRunning, setTime, mode, setMode, breakTime, cycleCount, setCycleCount);

    const startTimer = () => {
        setIsRunning(true);
    };
    
    const pauseTimer = () => {
        setIsRunning(false);
    };
    const resetTimer = () => {
        setIsRunning(false);
        if (mode === "work") {
            setTime(40 * 60);
        } else {
            setTime(breakTime);
        }
    }




return (
  <>
    <div>
      <Display 
        time={time} 
        onStart={startTimer} 
        onPause={pauseTimer} 
        onReset={resetTimer}
        mode={mode}
        cycleCount={cycleCount}
      />
    </div>
  </>
  )
}

export default App
