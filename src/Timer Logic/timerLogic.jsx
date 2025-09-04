import {useEffect} from "react";

function useTimerLogic(isRunning, setTime) {
    useEffect(() => {
        if(!isRunning) return;
        const interval = setInterval(() => {
            setTime(function(prevTime){
                if(prevTime > 0){
                    return prevTime - 1;
                }else{
                    return 0;
                }
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning, setTime] );
};

export default useTimerLogic;