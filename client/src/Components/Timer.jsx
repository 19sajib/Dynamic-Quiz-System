import React from 'react'

const Timer = ({data, setTimeEnd}) => {

    const { hrs = 0, mins = 0, secs = 60 } = data;
    const [[hours, minutes, seconds], setTime] = React.useState([hrs, mins, secs]);
    

    const tick = () => {
   
        if (hours === 0 && minutes === 0 && seconds === 0) {
            setTimeEnd(true)
            reset()}
        else if (minutes === 0 && seconds === 0) {
            setTime([hours - 1, 59, 59]);
        } else if (seconds === 0) {
            setTime([hours, minutes - 1, 59]);
        } else {
            setTime([hours, minutes, seconds - 1]);
        }
    };


    const reset = () => setTime([parseInt(hrs), parseInt(mins), parseInt(secs)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p className="text-2xl font-bold text-red-800 text-right px-5 mt-5">Time Reamaining: {`${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default Timer