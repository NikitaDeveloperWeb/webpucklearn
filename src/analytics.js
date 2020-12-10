function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;

  const listener = () => counter++;

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
    },

    getClicks() {
      if (isDestroyed) {
        return 'Destroy';
      }
      return counter;
    },
  };
}
