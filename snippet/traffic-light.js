function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

function task(timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (timer === 1000) {
        red();
      } else if (timer === 2000) {
        green();
      } else if (timer === 3000) {
        yellow();
      }
      resolve();
    }, timer);
  })
}

async function run() {
  await task(1000);
  await task(2000);
  await task(3000);
  run();
}

run();

