const timer = require('timerpromise');

(async () => {
  console.time('timer-5s');

  console.time('timer-3s');
  await new timer(3).start;
  console.timeEnd('timer-3s');

  console.time('timer-2s');
  await new timer(2).start;
  console.timeEnd('timer-2s');

  console.timeEnd('timer-5s');
})();