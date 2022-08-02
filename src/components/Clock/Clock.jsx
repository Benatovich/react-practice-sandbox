import React, { useState, useEffect } from 'react'

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function refresh() {
        setTime(new Date().toLocaleTimeString());
    }

    useEffect(() => {
        const timerId = setInterval(refresh, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

  return (
        <div>
            Current time: {time}
        </div>
  )
}