const scrollToElement = (selector, duration = 500) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const startPosition = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top;
  const startTime = performance.now();

  const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easing = easeInOutQuad(progress);

    window.scrollTo(0, startPosition + targetPosition * easing);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

// Usage
// document.getElementById("btn").addEventListener("click", () => {
//   scrollToElement("#section", 800);
// });