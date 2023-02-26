import React from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import cookie from "js-cookie";

const Timer = ({ onSubmit }) => {
  const min = 60;
  const renderer = ({
    hours,
    minutes,
    seconds,
    milliseconds,
    completed,
  }: any) => {
    if (completed && +cookie.get("timer") === 0) {
      onSubmit();
      cookie.remove("timer");
    } else {
      const millisecond =
        hours * 60 * 60 * 1000 +
        minutes * 60 * 1000 +
        seconds * 1000 +
        milliseconds;
      cookie.set("timer", millisecond, { secure: true });
      return (
        <span>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };
  return (
    <Countdown
      date={
        +cookie.get("timer")
          ? Date.now() + +cookie.get("timer")
          : Date.now() + min * 60 * 1000
      }
      intervalDelay={50}
      precision={3}
      renderer={renderer}
    />
  );
};

export default Timer;