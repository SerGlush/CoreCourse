async function task(val, border) {
    console.log(val++);
    if (val <= border) await Promise.resolve(val).then((val) => setTimeout(() => task(val, border), 1000));
  }
  
  task(1, 10);
