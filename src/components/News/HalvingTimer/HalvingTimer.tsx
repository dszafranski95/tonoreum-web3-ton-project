import { useCallback, useEffect, useRef, useState } from "react";

// Define an interface for the time left object
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HalvingNavbar = () => {
  const [countDownTime, setCountDownTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target countdown date here
  const halvingDate = "2024-12-31T23:59:59Z";

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getTimeDifference = useCallback((targetDate: number) => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference < 0) {
      clearInterval(timerRef.current as NodeJS.Timeout);
      setCountDownTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      setCountDownTime({
        days: Math.floor(timeDifference / (24 * 60 * 60 * 1000)),
        hours: Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (60 * 1000)) / 1000),
      });
    }
  }, []);

  useEffect(() => {
    const targetDate = new Date(halvingDate).getTime();
    timerRef.current = setInterval(() => {
      getTimeDifference(targetDate);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [getTimeDifference, halvingDate]);

  // Custom style for pronounced shadows using rgba
  const customShadowStyle = {
    boxShadow: '0 -4px 6px -1px rgba(255, 255, 255, 0.3), 0 4px 6px -1px rgba(255, 255, 255, 0.3)'
  };

  // Navbar style UI with top and bottom shadow
  return (
    <div style={customShadowStyle} className="top-0 left-0 w-full bg-[#20334E] z-50">
      <div className="flex justify-between items-center px-4 py-1 text-white text-sm">
        <div>Halving Countdown</div>
        <div>Days: {countDownTime.days}</div>
        <div>Hours: {countDownTime.hours}</div>
        <div>Minutes: {countDownTime.minutes}</div>
        <div>Seconds: {countDownTime.seconds}</div>
      </div>
    </div>
  );
};

export default HalvingNavbar;
