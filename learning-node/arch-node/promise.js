 const promise = new Promise((resolve, reject) => {
    setTimeout (() => {
        (Math.random () < 0.5) ? resolve('hello world') :  reject(new Error('error'));
      }, 2000);
  });

promise
    .then(msg => msg.toUpperCase())
    .then((msg) => console.log('message', msg))
    .catch((msg) => console.log('error', msg));
