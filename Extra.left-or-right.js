const solution = arr => {
  if (arr.length === 0) {
    return '';
  }
  let level = 1;
  let mid = 1;
  let left = 0;
  let right = 0;
  for (let i = 1; i < arr.length; i++) {
    if (i > mid * 2) {
      mid = mid + 3 * level;
      level++;
    }
    if (i <= mid && arr[i] !== -1) {
      left += arr[i];
    } else if (arr[i] !== -1) {
      right += arr[i];
    }
  }

  if (left > right) {
    return 'Left';
  } else if (right > left) {
    return 'Right';
  } else {
    return '';
  }
};

console.log(solution([1, 10, 5, 1, 0, 6]));
