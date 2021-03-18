import React, { useEffect, useRef, useState } from "react";
import "./timer.css";

export default function Timer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");

  // let interval = useRef();
  // // const startTimer = () => {
  // //   const time = new Date();
  // //   const countdowndate = new Date(time.getMilliseconds() + 600000).getTime();
  // //   interval = setInterval(() => {
  // //     const now = new Date().getTime();
  // //     const distance = countdowndate - now;
  // //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // //     const hours = Math.floor(
  // //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  // //     );

  // //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // //     if (distance < 0) {
  // //       //stop our timer
  // //       clearInterval(interval.current);
  // //     } else {
  // //       setTimerDays(days);
  // //       setTimerHours(hours);

  // //       setTimerMin(minutes);
  // //       setTimerSec(seconds);
  // //     }
  // //     console.log(now);
  // //   }, 1000);
  // // };
  // const startTimer = () => {
  //   interval = setInterval(() => {
  //     const seconds = 0;
  //     const minutes = 3;

  //     if (seconds > 0) {
  //       setTimerSec(({ seconds }) => ({
  //         seconds: seconds - 1,
  //       }));
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(interval.current);
  //       } else {
  //         setTimerMin(({ minutes }) => ({
  //           minutes: minutes - 1,
  //         }));
  //       }
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // });

  return (
    <section className="timer">
      <div>
        <section>
          <p>{timerDays}</p>
          <p>
            <small>days</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p>
            <small>hours</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMin}</p>
          <p>
            <small>min</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSec}</p>
          <p>
            <small>sec</small>
          </p>
        </section>
      </div>
    </section>
  );
}
