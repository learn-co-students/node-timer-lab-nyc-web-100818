const [, , timeInput] = process.argv;

let time = 0,
  interval = 1000;

if (timeInput.includes("s")) {
  time = parseInt(timeInput.split("s")[0]) * 1000;
} else if (timeInput.includes("min")) {
  time = parseInt(timeInput.split("min")[0]) * 1000 * 60;
} else {
  console.log("Invalid input");
  process.exit(1);
}

const timer = global.setInterval(() => {
  time -= interval;
  if (time > 0) {
    console.log(`Left: ${time / 1000}s`);
  } else {
    global.clearInterval(timer);
    process.exit(0);
  }
}, interval);
