// countdown.js
function countdownTimer(startTime, interval) {
  if (typeof startTime !== 'number' || typeof interval !== 'number' || startTime < 0 || interval <= 0) {
    throw new Error('Invalid input: startTime and interval must be positive numbers.');
  }

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