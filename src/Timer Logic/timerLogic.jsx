import {useEffect} from "react";

function useTimerLogic(isRunning, setTime, mode, setMode, breakTime, cycleCount, setCycleCount) {

    useEffect(() => {
        if(!isRunning) return;
        const interval = setInterval(() => {
            setTime(function(prevTime){
                if(prevTime > 0){
                    return prevTime - 1;
                }else{
                    if (mode === "work") {
                        setMode('break');
                        setCycleCount(prevCount => prevCount + 1); // Increment cycle count
                        return breakTime; // switch to break time
                    } else {
                        setMode('work');
                        return 40 * 60; // switch back to work time
                    }
                }
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning, setTime, mode, setMode, breakTime, setCycleCount] );
};

export default useTimerLogic;