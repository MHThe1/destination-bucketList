import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('INTERVAL')
            setRemainingTime(prevTime => prevTime - 10)
        }, 10);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const progress = (remainingTime / timer) * 100;
    const remainingTimeInSeconds = Math.round(remainingTime/1000)

    return (

        <div className="w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" 
                style={{ width: `${progress}%` }}> {remainingTimeInSeconds}s</div>
        </div>

    )
}