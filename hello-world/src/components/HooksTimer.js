import React, { useState, useEffect, useRef } from "react";

function HooksTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((pervTimer) => pervTimer + 1);
    }, 1000);
  }, []);
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
}

export default HooksTimer;
