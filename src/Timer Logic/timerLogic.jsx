import {useEffect} from "react";
import App from "../App.jsx";


function useTimerLogic(isRunning, setTime, mode, setMode, breakTime) {
    useEffect(() => {
        if(!isRunning) return;
        const interval = setInterval(() => {
            setTime(function(prevTime){
                if(prevTime > 0){
                    return prevTime - 1;
                }else{
                    if (mode === "work") {
                        setMode('break');
                        return breakTime; // switch to break time
                    } else {
                        setMode('work');
                        return 40 * 60; // switch back to work time
                    }
                }
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning, setTime, mode, setMode, breakTime] );
};

export default useTimerLogic;