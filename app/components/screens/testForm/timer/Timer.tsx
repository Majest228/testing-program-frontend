import React from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import cookie from "js-cookie";

const Timer = ({ onSubmit }) => {
  const min = 5;
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed && +cookie.get("timer") === 0) {
      onSubmit();
      cookie.remove("timer");
    } else {
      const milliseconds =
        hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
      cookie.set("timer", milliseconds, { secure: true });
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
          ? Date.now() + +cookie.get("timer") - 25
          : Date.now() + min * 60 * 1000
      }
      intervalDelay={50}
      precision={1}
      renderer={renderer}
    />
  );
};

export default Timer;
