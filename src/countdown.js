function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  const timerId = setInterval(() => {
    if (remainingTime > 0) {
      console.log(`Time left: ${remainingTime} second${remainingTime !== 1 ? 's' : ''}`);
      remainingTime--;
    } else {
      console.log("Time's up!");
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

module.exports = countdownTimer;
