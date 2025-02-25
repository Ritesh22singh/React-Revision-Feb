import React, { use, useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formateTime() {
    let hours = time.getHours();
    const mintues = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}: ${padZero(mintues)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div>
      <div>
        <span>{formateTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
