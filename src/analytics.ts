import * as $ from 'jquery';
function createAnalytics() {
  let counter: number = 0;
  let destroyed: boolean = false;

  const listener = () => counter++;

  $(document.body).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      destroyed = true;
    },

    getClicks() {
      if (destroyed) {
        return 'Destroy';
      }
      return counter;
    },
  };
}

window['analytics'] = createAnalytics();
