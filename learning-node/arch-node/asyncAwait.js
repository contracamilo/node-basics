const promiseFn = () => new Promise((resolve, reject) => {
    setTimeout (() => {
        (Math.random () < 0.5) ? resolve('hello world') :  reject(new Error('error'));
      }, 1000);
  });

  async function asAwaitFn() {
      try {
          const msg = await promiseFn();
          console.log('message', msg)
      } catch (error) {
          console.error('error',  error)
      }
  }

  asAwaitFn();