import React from 'react';
import './display.css';


function Display({ time }) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="display-container">
            <h1>Pomodoro Timer</h1>
            <div className="time-display">
                <span className="minutes">{minutes.toString().padStart(2, '0')}</span>:
                <span className="seconds">{seconds.toString().padStart(2, '0')}</span>
            </div>
            <div className="controls">
                <button className="start-btn">Start</button>
                <button className="pause-btn">Pause</button>
                <button className="reset-btn">Reset</button>
            </div>
        </div>
    );
}

export default Display;