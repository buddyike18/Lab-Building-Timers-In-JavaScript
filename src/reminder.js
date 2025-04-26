// reminder.js
function delayedReminder(message, delay) {
  if (typeof message !== 'string' || typeof delay !== 'number' || delay < 0) {
    return Promise.reject(new Error('Invalid input: message must be a string and delay must be a non-negative number.'));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}