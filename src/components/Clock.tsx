import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };

    const timerID = setInterval(tick, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <p className="text-6xl">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
