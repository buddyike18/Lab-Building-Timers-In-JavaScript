const countdownTimer = require('../src/countdown');

jest.useFakeTimers();
jest.spyOn(global, 'clearInterval'); // mock clearInterval globally

describe('countdownTimer', () => {
  test('should log remaining time at intervals and stop at 0', () => {
    console.log = jest.fn(); // Mock console.log

    const startTime = 5; // 5 seconds
    const interval = 1000; // 1 second
    const timerId = countdownTimer(startTime, interval);

    // Fast-forward all timers
    jest.advanceTimersByTime((startTime + 1) * interval); // +1 interval for "Time's up!"

    // Verify that console.log was called correctly
    expect(console.log).toHaveBeenCalledTimes(startTime + 1); // +1 for "Time's up!"

    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(`Time left: ${i} second${i !== 1 ? 's' : ''}`);
    }

    expect(console.log).toHaveBeenCalledWith("Time's up!");

    // Ensure timer was stopped
    expect(clearInterval).toHaveBeenCalledWith(timerId);
  });
});
