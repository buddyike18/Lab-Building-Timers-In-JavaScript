function recurringTimer(message, interval) {
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  return timerId;
}

function stopRecurringTimer(timerId) {
  if (!timerId) {
    throw new Error('Invalid input: timerId must be provided.');
  }
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };
