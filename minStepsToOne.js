function minStepsToOne(n) {
  let cache = {};
  function traverse(current) {
    if (current in cache) {
      return cache[current];
    }
    if (current === 1) {
      return 0;
    }
    let steps = traverse(current - 1);
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      steps = Math.min(steps, divide3);
    }
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      steps = Math.min(steps, divide2);
    }
    cache[current] = steps + 1;
    return steps + 1;
  }
  return traverse(n);
}

function minStepsToOneTab(n) {
  let result = new Array(n + 1);
  result[1] = 0;

  for (let i = 2; i < result.length; i++) {
    let steps = result[i - 1];

    if (i % 3 === 0) {
      let divide3 = result[i / 3];
      steps = Math.min(steps, divide3);
    }
    if (i % 2 === 0) {
      let divide2 = result[i / 2];
      steps = Math.min(steps, divide2);
    }
    result[i] = steps + 1;
  }
  return result[n];
}
console.time("minStepsToOneTab");
minStepsToOneTab(5000);
console.timeEnd("minStepsToOneTab");

console.time("minStepsToOne");
minStepsToOne(5000);
console.timeEnd("minStepsToOne");
