const asyncCallback = function name (cb) {
  setTimeout (() => {
    Math.random () < 0.5 ? cb (null, 'hello world') : cb (new Error('error'));
  }, 2000);
};

asyncCallback ((err, msg) => {
  if (err) {
    console.log ('error', err);
  } else {
    console.log ('message', msg);
  }
});
