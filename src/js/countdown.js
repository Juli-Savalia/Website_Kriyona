// src/js/countdown.js
export const startCounter = (counters, setCounting) => {
  counters.forEach((counter) => {
    let currentValue = counter.startValue;
    const increment = (counter.endValue - counter.startValue) / (2000 / 50); // 2000ms duration, 50ms interval

    const counterInterval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= counter.endValue) {
        currentValue = counter.endValue;
        clearInterval(counterInterval);
      }
      const displayValue = `${Math.floor(currentValue)}M+`;
      document.querySelector(`.${counter.className}`).innerText = displayValue;
    }, 50);
  });

  setCounting(false);
};
