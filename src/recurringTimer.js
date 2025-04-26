// recurringTimer.js
function recurringTimer(message, interval) {
  if (typeof message !== 'string' || typeof interval !== 'number' || interval <= 0) {
    throw new Error('Invalid input: message must be a string and interval must be a positive number.');
  }

  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  return timerId;
}

function stopRecurringTimer(timerId) {
  if (typeof timerId !== 'number') {
    throw new Error('Invalid input: timerId must be a number.');
  }

  clearInterval(timerId);
}